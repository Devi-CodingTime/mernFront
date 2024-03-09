import React from 'react'

const Dropdown = (props) => {
    const {onChangeHandler,text} = props;
    let monthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let Year = [2021,2022];
  return (
    <form className="max-w-sm mr-8">
    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
    <select id="countries" onChange={onChangeHandler} name={text.split(" ")[1].toLowerCase()}
    class="bg-gray-50 border border-gray-300 text-gray-900 w-[130%] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>{text}</option>
        
        {text.split(" ")[1]=="Year"?Year.map((i,index)=>{
            return(<option key={index} value={i}>{i}</option>)
      }):
      monthArr.map((i,index)=>{
        return(<option key={index} value={index+1} selected>{i}</option>)
  })}
    </select>
    </form>

  )
}

export default Dropdown
