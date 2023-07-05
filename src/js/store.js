import { createStore, request } from 'framework7';

const store = createStore({
  state: {
    shippingAddress: null,
    products: [],
    variants: [],
    cart: [],
    tonusd: 1,
  },
  getters: {
    shippingAddress({ state }) {
      return state.shippingAddress;
    },

    products({ state }) {
      return state.products;
    },

    product({ state }) {
      return (productId) => state.products.find((p) => p.id == productId);
    },

    productByVariantId({ state }) {
      return (variantId) => state.products.find((product) => product.variants.some((variant) => variant.id === variantId));
    },

    cart({ state }) {
      return state.cart.reduce((cart, current) => {
        const line = cart.find((item) => item.variant.sku === current.sku);

        if (line) {
          line.quantity++;
        } else {
          cart.push({
            variant: current,
            product: state.products.find((product) => product.id === current.product_id),  
            quantity: 1
          });
        }

        return cart;
      }, [])
    },

    tonusd({ state }) {
      return state.tonusd;
    },
  },
  actions: {
    init ({ state, dispatch }) {
      const shippingAddress = localStorage.getItem('shipping_address');
      if (shippingAddress) {
        state.shippingAddress = JSON.parse(shippingAddress);
      }

      setInterval(() => dispatch('getTonUsd'), 60000 * 5);
      dispatch('getTonUsd');
    },

    async getProducts({ state }) {
      const { data } = await request.json('/products');
      state.products = data;
    },

    async getProduct({ state }, productId) {
      let product = state.products.find((product) => product.id === productId);

      if (!product) {
        const { data } = await request.json(`/products/${productId}`);
        product = data;
        state.products.push(product);
      }

      return product;
    },

    async getProductVariants({ state }, productId) {
      let variants = state.variants.filter((variant) => variant.product_id === productId);

      if (variants.length === 0) {
        const { data } = await request.json(`/products/${productId}/variants`);
        variants = data;
        state.variants.push(variants);
      }

      return variants;
    },

    async getTonUsd({ state }) {
      const { data } = await request.json('https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd');
      state.tonusd = data['the-open-network'].usd;
    }
  },
})
export default store;
