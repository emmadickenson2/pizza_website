import { useState, useEffect, useCallback } from 'react'
import {CiPizza} from "react-icons/ci";
import Search from "./components/Search"
import AddOrder from "./components/AddOrder"
import OrderInfo from "./components/OrderInfo";

function App() {

  let [orderList, setOrderList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("name");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredOrders = orderList.filter(
    item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.order.toLowerCase().includes(query.toLowerCase()) ||
        item.orderNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a,b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setOrderList(data)
    });
  }, []) 

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <CiPizza className="inline-block text-red-600 align-top"/>Your Orders</h1>
        <AddOrder />
      <Search query={query}
      onQueryChange={myQuery => setQuery(myQuery)}/>

      <ul className="divie-y divide-gray-200">
        {filteredOrders
          .map(order => (
            <OrderInfo key={order.id}
            order={order}
            onDeleteOrder={
              orderId => 
                setOrderList(orderList.filter(order => 
                  order.id !== orderId))
            }
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;