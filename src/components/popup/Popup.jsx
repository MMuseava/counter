import React from 'react'
import "./popup.style.css"

const Popup = ({ info, closePopup ,imgUrl }) => {
  return (
      <div className='popup-container'>
          <div className='popup-text'>
          <p>{info}</p>
              <button onClick={closePopup} id='close-popup' >X</button>
              <img src={ imgUrl} width={"100px"}/>
          </div>
    </div>
  )
}

export default Popup