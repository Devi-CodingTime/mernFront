import React, { useEffect, useState } from 'react'
import Dropdown from '../dashboard/Dropdown';
import Navbar from '../navbar/Navbar';

const BarChart = () => {
    const [month,setMonth] = useState(new Date().getMonth()+1);
    const [barItems,setbarItems] = useState({});

    const monthInput = (e)=>{
        setMonth(e.target.value);
    }

    const getPriceRange = async(monthValue)=>{
       try{ 
            const queryParams = new URLSearchParams({
            month: monthValue
          });
		//   local link : http://localhost:5000/priceRange
		
          const res = await fetch(`https://mernback-ck6b.onrender.com?${queryParams}`, {
            method: "GET",
          });
            const data = await res.json();
            console.log(data.data);
            setbarItems(data.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getPriceRange(month);
    },[month]);
  return (<>
  	<Navbar/>
    <div className='flex gap-2 flex-col bg-cyan-50 m-auto items-center h-[100vh] mx-auto my-auto p-8 '>
		
        {console.log(barItems?.Under600?.ItemCount*10)}
            <h1 className='font-bold text-xl '>Bar Charts Stats</h1>
        <section className='flex justify-between gap-10'>

                <Dropdown text="Select Month" onChangeHandler={monthInput}/>
            
        </section>
        <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
		<h2 className="text-xl font-bold">Monthly Revenue</h2>
		{/* <span className="text-sm font-semibold text-gray-500">2020</span> */}
		<div className="flex items-end flex-grow w-full space-x-2 sm:space-x-3 mt-8">
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under100?.ItemCount}</span>
				<div className={`relative flex justify-center w-full h-${barItems?.Under100?.ItemCount?barItems?.Under100?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under100?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under200?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Under200?.ItemCount?barItems?.Under200?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under200?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under300?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Under300?.ItemCount?barItems?.Under300?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under300?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under400?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Under400?.ItemCount?barItems?.Under400?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under400?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under500?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Under500?.ItemCount?barItems?.Under500?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under500?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under600?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Under600?.ItemCount?barItems?.Under600?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under600?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under700?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Under700?.ItemCount?barItems?.Under700?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under700?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under800?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Under800?.ItemCount?barItems?.Under800?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under800?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Under900?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Under900?.ItemCount?barItems?.Under900?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Under900?.range}</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">{barItems?.Above900?.ItemCount}</span>

				<div className={`relative flex justify-center w-full h-${barItems?.Above900?.ItemCount?barItems?.Above900?.ItemCount*20:0} bg-cyan-300`}></div>
				<span className="absolute bottom-0 text-xs font-bold">{barItems?.Above900?.range} above</span>
			</div>
			
		</div>
		<div className="flex w-full mt-3">
			<div className="flex items-center ml-auto">
				<span className="block w-4 h-4 bg-cyan-300"></span>
				<span className="ml-1 text-xs font-medium">Item Count</span>
			</div>
		</div>
	</div>
    </div>
	</>
  )
}

export default BarChart
