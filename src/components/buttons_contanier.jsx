const ButtonsContainer=({onButtonClick})=>{
  
  const buttons=[
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.'];
  return(
    
   
   <div className='container-buttons'>
      
              {buttons.map((buttons)=>(
                    <button  
                    onClick={()=> onButtonClick(buttons)} key={buttons}>
                      {buttons}
                      </button>
              ))}      
                
                  
    </div>
  );
}
export default ButtonsContainer