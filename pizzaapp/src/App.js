import {CiPizza} from "react-icons/ci";
import Search from "./components/Search"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <CiPizza className="inline-block text-red-600 align-top"/>Your Orders</h1>
      <Search/>
    </div>
  );
}

export default App;
