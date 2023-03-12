import React, { useEffect, useState } from "react";
import img from "../../../public/images/home/desktop/headphone-hero-image.png"
import { useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios"
import 'react-dropdown/style.css';

import Dropdown from 'react-dropdown';
export default function Product()
{
  const handleDragStart = (e) => e.preventDefault();
  const options = [
    'one', 'two', 'three'
  ];

  const defaultOption = options[0];
  //
const items = [
  <img  src={img} onDragStart={handleDragStart} role="presentation" />,
  <img  src={img} onDragStart={handleDragStart} role="presentation" />,
  <img  src={img} onDragStart={handleDragStart} role="presentation" />,
];


///////
  const[data,setdata]=useState({})
  const { id } = useParams();

 useEffect(()=>{
  const getdata=async ()=>{
    const response = await axios.get(`/api/product/find/${id}`)
    setdata(response.data.exist)
    console.log(data)
  }
getdata();
 },[id])


    return(
      <div className="">
     
      <div className="  pt-28   flex">
   <div className="w-[50%] -z-10  flex flex-col mx-auto">
   <h1 className="font-extrabold text-6xl" >{data.name}</h1>
      <AliceCarousel  mouseTracking items={items} />
   
         </div>
         
         
      </div>
      <div className="" >
        <div className=" mx-auto w-[80%]  overflow-auto">
        <p className="break-words font-extralight ">
          {data.description}
        </p>
        
        <Dropdown options={options} /*onChange={this._onSelect}*/ value={defaultOption} placeholder="Select an option" />;

        </div>
      
      </div>
      </div>
    )
}