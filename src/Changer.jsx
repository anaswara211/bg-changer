import React,{useState} from 'react';
import './changer.css'

const Changer = () => {
    const[color,setColor] = useState("#FFFFFF")
  return (
    <>
        <div style={{  height:'100vh',backgroundColor:color}}  >
          <h1 style={{ textAlign: 'center',paddingTop:'200px'}} className='mt-5' >Background Changer</h1>
          <div style={{marginTop: '5rem'}} >
        <button className='btn btn1 ' onClick={()=>setColor("red")}>Red</button>
        <button className='btn btn2' onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='btn btn3' onClick={()=>setColor("blue")}>Blue</button>
        <button className='btn btn4' onClick={()=>setColor("green")}>Green</button>
        <button className='btn btn5' onClick={()=>setColor("pink")}>Pink</button>
        <button className='btn btn6' onClick={()=>setColor("orange")}>Orange</button>
        <button className='btn btn7' onClick={()=>setColor("violet")}>Violet</button>
        <button className='btn btn8' onClick={()=>setColor("brown")}>Brown </button>





        </div>
        </div>
     

    </>
  );
}

export default Changer;