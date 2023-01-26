import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import { Mycontext } from '../context/Mycontext'
import './Stage1.css'
const Stage1 = () => {
  const data = useContext(Mycontext)
  const textInput = useRef()
  const [error,setError] = useState([false, "Something went wrong"])
  
  const submitHandler =  (event) => {
    event.preventDefault();
    const value = textInput.current.value
    const valid = validator(value)

    if (valid){
      setError(false,"")
      data.putData(value)
    }
  }

  const validator = (value)=>{
      if (value === ""){
        setError([true, "Please enter your name"])
        return false
      }
      if (value.length <=3){
        setError([true, "Your name must be greater than 3 characters"])
        return false
      }
      return true
  }

    

  return (
    <>
        <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input type="text" ref={textInput} placeholder='Enter Player Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            {error[0] === true ? <h4> {error[1]}</h4> : null}
            <button type="submit" className="btn btn-primary">Submit </button>
        </form>
        <br />
        <hr />
        <div className="player-list"> 
              <h2 className='title-player text-center fw-light'>list of player :</h2>
              {data.user && data.user.length >= 1 ? 
                    data.user.map((items,idx)=>{
                      return(
                       <div key={idx}>
                           <ul className="lists d-flex justify-content-between" >
                              <li className="list-item py-2">
                                {items}
                              </li>
                              <button className="close py-2" onClick={()=>{data.userDelete(idx)}}>
                               X
                              </button>
                          </ul>
                        
                       </div>
                      )
                    })
                    
              : null}

              {data.user && data.user.length >= 1 ?
                        <div className="action-button" onClick={()=>{data.nextHandler()}}>
                        Next
                      </div>
                : null}


              

        </div>
    </>
  )
}

export default Stage1