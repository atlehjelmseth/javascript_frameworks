import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import Layout from './components/Layout'
import Product from './pages/ProductPage'
import { Routes, Route } from "react-router-dom"



function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>

  );
}

export default App;
