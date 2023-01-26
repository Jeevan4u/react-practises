import React,{createContext ,useState} from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Mycontext = createContext()

const MycontextProvided = (props) => {
    const[Stage,setStage]=useState(1)
    const[user,setUser] = useState([])
    const[winner,setWinner] = useState()


   


    const putData = (value) =>{
        setUser((prevUser) => (
            [...prevUser,value]
        ))
    }

    const userDelete = (idx)=>{
            let newUsers = [...user]
            // console.log(newUsers)
            newUsers.splice(idx, 1)
            setUser(newUsers)
    }

    const nextHandler = () => {
        if(user.length < 2){
            toast.error("There must be at least 2 players" ,{
                position: toast.POSITION.TOP_LEFT,
                autoClose : 2000
              
            })
        }else{
            setStage(2)
        }
    }

    const winnerHandler = ()=>{
        let currnetUsers = [...user]
        let newWinner = Math.floor(Math.random() * currnetUsers.length);
        setWinner(currnetUsers[newWinner])
    }
    
    return ( 
        <>
            <Mycontext.Provider value={{Stage,setStage ,user, putData, userDelete, nextHandler, winnerHandler , winner}}>
                {props.children}
            </Mycontext.Provider>
            <ToastContainer />
        </>
        
     );
}
 
export default MycontextProvided;
