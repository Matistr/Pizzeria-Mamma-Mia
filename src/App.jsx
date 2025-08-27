import './App.css'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart />
      <Footer />
    </>
  )
}

export default App;