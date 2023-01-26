import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../context/Mycontext'

const Stage2 = () => {
  const {setStage} = useContext(Mycontext)
  const  {winner}= useContext(Mycontext)
  const {winnerHandler} = useContext(Mycontext)
  
  return (
    <div onLoad={winnerHandler()}>
      {/* {setTimeout(()=>{
        winnerHandler()
      },1000)} */}
      <h3 className='text-center fw-light my-4' >The winner is {winner}</h3> 

      <div className="text-center">
       <button className='btn btn-outline-success m-2 ' onClick={()=>winnerHandler()} >Show winner</button>
       <button className='btn btn-outline-success m-2 ' onClick={()=>setStage(1)}>Go Back</button>

      </div>
    </div>
  )
}

export default Stage2