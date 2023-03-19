import { useState} from 'react';
import './App.css';
import { image } from './image';



function App() {
  const [counter,setcounter] = useState(0);
  const [reverseorder, setReverseOrder] = useState(false)

  const handelChangePic =() => {
    const nextCounter = reverseorder ? counter - 1 : counter+ 1;
    if
    (nextCounter >= image.length){
      setcounter(image.length -2);
      setReverseOrder(true)
    }else if(nextCounter <= 0){
      setcounter(0);
      setReverseOrder(false)
    }else{
      setcounter(nextCounter)
    }
  }
  return (
    <div className="slider-countainer">
      <div>
        {image.map((image,index) => (
         <img className='slideImage' key={index} src={image} style = {{bottom: '$'(index *1
          )}}
        
       </div>

      <div className='btn-div'>
        <button onClick={handelChangePic}>change Pic</button>

      </div>
    </div>
  );
}

export default App;