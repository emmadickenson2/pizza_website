import { BiCalendarPlus} from "react-icons/bi"
import { useState } from 'react';

const AddOrder = ({ onSendOrder, lastId }) => {
  const clearData = {
    name: '',
    order: '',
    orderDate: '',
    orderTime: '',
    orderNotes: '' 
  }
    let [toggleForm, setToggleForm] = useState(false)
    let [formData, setFormData] = useState(clearData)

    function formDataPublish() {
      const orderInfo = {
        id: lastId +1,
        name: formData.name,
        order: formData.order,
        orderDate: formData.orderDate + ' ' + formData.orderTime,
        orderNotes: formData.orderNotes 
      }
      onSendOrder(orderInfo);
      setFormData(clearData);
      setToggleForm(!toggleForm);
    }

    return (
        <div>
        <button onClick={() => { setToggleForm(!toggleForm)} }
            className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
            ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}>
          <div><BiCalendarPlus className="inline-block align-text-top" />  Create Order </div>
        </button>
       {
        toggleForm &&
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Your Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="name" id="name"
                onChange={(event) => {setFormData({...formData, name: event.target.value})}}
                value={formData.name}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="order" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Pizza Order
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="order" id="order"
              onChange={(event) => {setFormData({...formData, order: event.target.value})}}
              value={formData.order}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="orderDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Pickup Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="date" name="orderDate" id="orderDate"
              onChange={(event) => {setFormData({...formData, orderDate: event.target.value})}}
              value={formData.orderDate}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="orderTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Pickup Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="time" name="orderTime" id="orderTime"
                onChange={(event) => {setFormData({...formData, orderTime: event.target.value})}}
                value={formData.orderTime}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Order Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea id="orderNotes" name="orderNotes" rows="3"
                onChange={(event) => {setFormData({...formData, orderNotes: event.target.value})}}
                value={formData.orderNotes}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Any further instructions for pizza"></textarea>
            </div>
          </div>
  
  
          <div className="pt-5">
            <div className="flex justify-end">
              <button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
          </div>
        </div>
       } 
      </div>
    )
}

export default AddOrder