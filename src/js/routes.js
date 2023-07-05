
// import HomePage from '../pages/home.f7';
import ProductsPage from '../pages/products.f7';
import ProductPage from '../pages/product.f7';
import ShippingPage from '../pages/shipping.f7';
import CheckoutPage from '../pages/checkout.f7';
import CartPage from '../pages/cart.f7';

var routes = [
  {
    path: '/',
    // component: HomePage,
    redirect: '/products/',
  },
  {
    path: '/products/',
    component: ProductsPage,
    routes: [
      {
        path: ':id/',
        component: ProductPage,
      },
    ],
  },
  {
    path: '/shipping/',
    async({ resolve, reject }) {
      if (this.app.store.state.cart.length === 0) {
        reject();
        this.navigate('/products/');
      } else {
        resolve({ component: ShippingPage });
      }
    },
  },
  {
    path: '/checkout/',
    async({ resolve, reject }) {
      if (this.app.store.state.cart.length === 0) {
        reject();
        this.navigate('/products/');
      } else {
        resolve({ component: CheckoutPage });
      }
    },
  },
  {
    path: '/cart/',
    async({ resolve, reject }) {
      if (this.app.store.state.cart.length === 0) {
        reject();
        this.navigate('/products/');
      } else {
        resolve({ component: CartPage });
      }
    },
  },
];

export default routes;
