
import './App.css';
import MycontextProvider, { Mycontext } from './context/Mycontext';
import { useContext } from 'react';
import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";

function App() {
 const data1 = useContext(Mycontext)
 
  return (
    <div className="App">
      
         <div className="wrapper">
             <div className="content">
              <h2 className="title">Who pays the bill</h2>
             </div>
                  <div className="stage">
                  {data1.Stage === 1 ? <Stage1 /> : <Stage2/>} 
                  </div>
           </div>        
    </div>
  );
}

export default App;
