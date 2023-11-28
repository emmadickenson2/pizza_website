import {CiPizza} from "react-icons/ci";
import Search from "./components/Search"
import AddOrder from "./components/AddOrder"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <CiPizza className="inline-block text-red-600 align-top"/>Your Orders</h1>
        <AddOrder />
      <Search />
    </div>
  );
}

export default App;