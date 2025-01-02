
import './App.css'
import Inputtype from './components/input_type';
import ButtonsContainer from './components/buttons_contanier';
import { Button } from 'bootstrap';
import { useState } from 'react';


function App() {

      const[calVal,setCalval]=useState("");
      const onButtonClick=(buttonText)=>{
            if(buttonText==='C'){
                        setCalval("");
            }
            else if(buttonText==='='){
                  const result=eval(calVal);
                  setCalval(result);
            }
            else{
                  setCalval(calVal+buttonText);
                  
            }
      }
      return (
        <center>
        <div className='calculator'>
              <Inputtype calVal={calVal}></Inputtype>
              <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
            
        </div>
        </center>
      );
}

export default App
