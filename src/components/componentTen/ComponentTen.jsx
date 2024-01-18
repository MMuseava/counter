import React, { useState } from 'react'
 import "./componentTen.style.css"





const ComponentTen = () => {

    const [count, setCount] = useState(10)
    const onMinusClick = () => {
        if (count > 0) {
            
            setCount(count - 10)
        }
    
}
    const onPlusClick = () => {
        if (count < 100) {
            
            setCount(count + 10)
        }

        
    
    }
    
    const showMessage = () => {
		if (count < 100 && count > 10) {
			return <p>keep it going</p>;
		} else if (count === 100) {
			return <p>Reached Max!</p>;
		} else if (!count) {
			return <p>Reached Min!</p>;
		}
	};
  return (
      <div className='ten'>
          <div  className="button-group">
          <button className='button-ten' onClick={onMinusClick}>-</button>
          <p>
              {count}
          </p>
              <button className='button-ten' onClick={onPlusClick}>+</button>
              </div>
          <div>{showMessage()}</div>

    </div>
  )
}

export default ComponentTen