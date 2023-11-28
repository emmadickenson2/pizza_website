import {CiPizza} from "react-icons/ci";
import {BiTrash} from "react-icons/bi";
import Search from "./components/Search"
import AddOrder from "./components/AddOrder"
import orderList from "./data.json"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <CiPizza className="inline-block text-red-600 align-top"/>Your Orders</h1>
        <AddOrder />
      <Search />

      <ul className="divie-y divide-gray-200">
        {orderList
          .map(order => (
            <li className="px-3 py-3 flex items-start">
              <button type="button"
                className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <BiTrash /></button>
              <div className="flex-grow">
                <div className="flex items-center">
                  <span className="flex-none font-medium text-2xl text-blue-500">{order.name}</span>
                  <span className="flex-grow text-right">{order.orderDate}</span>
                </div>
                <div><b className="font-bold text-blue-500">Order:</b> {order.order}</div>
                <div className="leading-tight">{order.orderNotes}</div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;