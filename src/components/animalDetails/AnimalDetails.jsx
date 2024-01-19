import { catInfo } from '../../assets/data/animalInfo'
import { dogInfo } from '../../assets/data/animalInfo'
import { horseInfo } from '../../assets/data/animalInfo'
import React, { useState } from 'react'
import Popup from '../popup/Popup'

import "./animalDetails.style.css"




const AnimalDetails = () => {
  
  const [isCatOpen, setIsCatOpen] = useState(false)

  const [isDogOpen, setIsDogOpen] = useState(false)

  const [isHorseOpen, setIsHorseOpen] = useState(false)
  
  
  const onCatClick = () => {

  setIsCatOpen(!isCatOpen)
}
  const onDogClick = () => {
   setIsDogOpen(!isDogOpen)
 }

  const onHorseClick = () => {
    setIsHorseOpen(!isHorseOpen)
  }
  return (
    <div  className='animal-container'>
      <div >
      <button className='animals' onClick={onCatClick} >
        Cat
      </button>

        {isCatOpen ? (<Popup info= {catInfo.description} imgUrl= {catInfo.imgUrl} closePopup={()=> setIsCatOpen(false)} /> ): null}
      </div>
      <div>
        <button className='animals' onClick={onDogClick}>Dog</button>
        {isDogOpen ? <p>{ dogInfo}</p> : null}
      </div>
      <div>
        <button className='animals' onClick={onHorseClick}>Horse</button>
        {isHorseOpen ? <p>{ horseInfo}</p> : null}
      </div>

    </div>

  )
}

export default AnimalDetails