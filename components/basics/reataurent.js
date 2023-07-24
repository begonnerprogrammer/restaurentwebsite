import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuapi"
import Menucard from './menucard';
import Navbar from "./navbar";
const uniquelist=[...new Set(Menu.map((currelem)=>{
return currelem.category;
})),"All"
];
console.log(uniquelist)
const Reataurent = () => {
  const [menudata,setMenu]=useState(Menu);
  const [menulist,setMenulist]=useState(uniquelist)
  const filteritem=(category)=>{
    if(category==="All"){
      setMenu(Menu);
      return;
    }
    const updatedlist=Menu.filter((currelem)=>{
    return currelem.category===category
    })
    setMenu(updatedlist);
    }



  return (
    <>
 
  <Navbar filteritem={filteritem} menulist={menulist}/>
  <Menucard menudata={menudata}/>
  </>
  
  )
}

export default Reataurent
