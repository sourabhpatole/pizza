import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
