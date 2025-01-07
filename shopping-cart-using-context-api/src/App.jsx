
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import ShoppingCartProvider from './store/shopping-cart-context.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';


function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </ShoppingCartProvider>
  );
}

export default App;
