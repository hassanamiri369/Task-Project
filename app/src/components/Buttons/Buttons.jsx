import React from 'react'
import "./ButtonsStyle.css";
import { GoMoveToTop } from 'react-icons/go';



const Buttons = () => {

  

  const ToTopFunction = ()=>{
    window.scrollTo({top : 0 , behavior : 'smooth'})
  }

  return (
    <div className='button-container'>
        <button onClick={ToTopFunction}><GoMoveToTop/></button>
    </div>
  )
}

export default Buttons