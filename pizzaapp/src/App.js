import {CiPizza} from "react-icons/ci";
import Search from "./components/Search"
import AddOrder from "./components/AddOrder"
import OrderInfo from "./components/OrderInfo";
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
            <OrderInfo key={order.id}
            order={order}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;