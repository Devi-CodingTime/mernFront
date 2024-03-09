import React, { useEffect, useState } from 'react'
import Search from './Search'
import Table from './table'
import Button from './Button'
import Navbar from '../navbar/Navbar'
import Dropdown from './Dropdown'

const Dashboard = () => {
    const [search,setSearch] = useState("");
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1);
    const [month,setMonth] = useState("");

    const searchInput = (e)=>{
        setSearch(e.target.value);
    }
    const monthInput = (e)=>{
      setMonth(e.target.value);
      productDetail();
    }
    const prevClick = () => {
      if (page> 1) {
        setPage(page - 1);
      }
    };
  
    const nextClick = () => {
      if (page< totalPages) {
        setPage(page+ 1);
      }
    };
   
    const productDetail = async()=>{
       try
       { 
        let queryParams
        if(month)
        {
            queryParams = new URLSearchParams({
            month:month,
            page:page
          });
        }
        else
        {
            queryParams = new URLSearchParams({
            search:search,
            page:page
          });
        }
        // local link : http://localhost:5000/productList
        
          const res = await fetch(`https://mernback-ck6b.onrender.com/?${queryParams}`, {
            method: "GET",
          });
          const data = await res.json();
          console.log(data);
          setProduct(data.products);
          setTotalPages(data.totalPages);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        productDetail();
    },[]);

    useEffect(()=>{
      productDetail();
    },[page,month]);

  return (<>
      <Navbar/>
    <div className='flex gap-2 flex-col bg-cyan-50 m-auto py-5 items-center h-[100vh]'>
      
      <div className='flex justify-between w-[75%] items-center'>
        <Search onChange={searchInput} btnClick={productDetail}/>

        <Dropdown text="Select Month" onChangeHandler ={monthInput}/>
      </div>
      <div className='w-[75%]'>
        <Table products={product}/>
      </div>
      <div className='flex justify-between w-[75%]'>
        <p>Page No : {page}</p>
        <div className='flex gap-4'>
            <Button buttonText="Previous" type='button' onClick={prevClick} disabled={page === 1?true:false}
            className="bg-blue-700 hover:bg-blue-800  text-white p-4 py-2 rounded w-24"/>
            <Button buttonText = "Next" type='button' onClick={nextClick} disabled={page === totalPages?true:false}
            className="bg-blue-700 hover:bg-blue-800  text-white p-4 py-2 rounded w-24"/>
        </div>
        <p>Per Page : 10</p>
      </div>
    </div>
    </>
  )
}

export default Dashboard
