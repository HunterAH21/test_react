import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './index.css';

function Welcome(){
  const[count, setCount ] = useState(50);
  return(
    <div>
      <button id='sub' onClick={()=> setCount(count - 1)}>-</button>

      <p>{count} </p>
      <button id='add' onClick={()=> setCount(count + 1)}>+</button>
    </div>
  );
}

ReactDOM.render(<Welcome />,document.getElementById('root'));
