import React, { useEffect, useState } from 'react'
import Dropdown from '../dashboard/Dropdown'
import Button from '../dashboard/Button';
import Navbar from '../navbar/Navbar';

const TransactionDetail = () => {
   
    const [month,setMonth] = useState(new Date().getMonth()+1);
    const [year,setYear] = useState(2022);

    const [item,setItem] = useState({});

    const monthInput = (e)=>{
        setMonth(e.target.value);
    }
    const yearInput = (e)=>{
        setYear(e.target.value);
    }


    const getTransactionDetail= async()=>{

       try{ 
            const queryParams = new URLSearchParams({
            month: month,
            year:year
          });
          // local link : http://localhost:5000/totalSale
          
          const res = await fetch(`https://mernback-ck6b.onrender.com/?${queryParams}`, {
            method: "GET",
          });
        const data = await res.json();
        console.log(data);
            setItem(data);
        }
        catch(error){
            console.log(error);
        }
    }
   
  return (
    <div className='flex gap-2 flex-col bg-cyan-50 m-auto items-center h-[100vh]'>
      <Navbar/>
        <div className='flex justify-between w-[40%]'>
            
            <Dropdown text="Select Month" onChangeHandler ={monthInput}/>
            <Dropdown text="Select Year" onChangeHandler = {yearInput}/>
        </div>
          <Button buttonText="submit" type="button" onClick={getTransactionDetail} 
            className="bg-blue-700 hover:bg-blue-800 w-[40%] text-white p-4 py-2 rounded"/>
      <div className='w-75% rounded p-4 bg-yellow-400 w-[40%]'>
        <p className='flex justify-between'>
            <span>Total Sale</span><span>{item.totalSale}</span>
        </p>
        <p className='flex justify-between'>
        <span>Total Sold Item</span><span>{item.soldItems}</span>
        </p>
        <p className='flex justify-between'>
        <span>Total not Sold Item</span><span>{item.notSoldItems}</span>
        </p>

      </div>
    </div>
  )
}

export default TransactionDetail
