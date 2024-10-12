import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import Layout from './components/Layout'
import Product from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CartSuccess from './pages/CheckoutSuccessPage'
import { Routes, Route } from "react-router-dom"
import { ShoppingCartProvider } from './components/ShoppingCart';



function App() {
  return (
    <div>
      <ShoppingCartProvider>
        <Layout />

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cartsuccess" element={<CartSuccess />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </ShoppingCartProvider>
    </div>

  );
}

export default App;
