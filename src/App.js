import {useState, useEffect} from 'react';

function App() {
  const [mousePostion, setMousePostion]= useState({x:0, y:0});

  useEffect(()=>{
    const handleMouseMove = (event) =>{
      setMousePostion({
        x: event.clientX,
        y: event.clientY
      })
    }

    document.addEventListener('mousemove', handleMouseMove);
  
    return () =>{
      document.removeEventListener('mousemove', handleMouseMove);
    }
  },[])

  return (
    <div>
      <h4>User Mouse Activity Tracker</h4>
      <p>Last mouse position: X: {mousePostion.x}, Y: {mousePostion.y}</p>
    </div>
  );
}

export default App;
