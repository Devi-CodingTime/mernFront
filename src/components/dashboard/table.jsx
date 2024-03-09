import React from 'react'

const Table = ({products}) => {
  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Sold
                </th>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
            </tr>
        </thead>
        <tbody>
            {products?.map((items,index)=>{
                return(
                    <tr key ={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {items.id}
                </th>
                <td className="px-6 py-4">
                   {items.title}
                </td>
                <td className="px-6 py-4">
                    {items.description}
                </td>
                <td className="px-6 py-4">
                    {items.category}
                </td>
                <td className="px-6 py-4">
                    {items.price}
                </td>
                <td className="px-6 py-4">
                    {items.sold?"sold":"not sold"}
                </td>
                <td className="px-6 py-4">
                    <img src={items.image}/>
                </td>
            </tr>
                )
            })}
            
        </tbody>
    </table>
</div>

  )
}

export default Table
