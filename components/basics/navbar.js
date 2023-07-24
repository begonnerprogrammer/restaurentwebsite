import React from 'react';
import Menu from "./menuapi";
import { useState } from 'react';
const Navbar = ({ filteritem , menulist } ) => {
    const [menudata,setMenu]=useState(Menu);
  
  return( <>
      <nav className='navbar'>
    <div className="btn-group">
        {
            menulist.map((currelem)=>{
                return(
                    <button className="btn-group__item" onClick={()=>filteritem(currelem)}>{currelem}</button>
                )
            })
        }
    </div>
    
  </nav>
    </>
  )
}

export default Navbar
