import {useState} from 'react' ;

function App() {

  const [calculator, setCalculator] = useState("") ;
  
  const [result , setResult] = useState("") ;

  const operators = ['/', '*' , '+' , '-' , '.' ] ;

  const updateCalculator = value => {

    if(
      operators.includes(value) && calculator == '' || 
      
      operators.includes(value) && operators.includes(calculator.slice(-1))
    )
    {
      return ;
    }

    setCalculator(calculator + value) ;

    if (!operators.includes(value)){
      
      setResult(eval(calculator + value).toString());
    }
  }

  const createDigits = () => {
  
    const digits = [] ;

    for (let i = 1 ; i <10 ; i++){
      
    digits.push(
      
        <button onClick={() => updateCalculator(i.toString())}key = {i}>{i}
       
        </button>
      )
  }
  return digits;
} 

  const calculate = () => {
    setCalculator(eval(calculator).toString()) ;
}

  const del_ete = () => {
    if(calculator == '' ){
      return ;
    }

    const value = calculator.slice(0 , -1) ;

    setCalculator(value) ;
  }

  return (
    
    <div className = "App">
      
      <div className = "calculator">
        
        <div className = "display">
          
         {result ?  <span>{result}</span> : '' } &nbsp; {calculator || "0" }
        
        </div>
        
        <div className = "operators">
            
            <button onClick = {() => updateCalculator('/')}>/</button>
           
            <button onClick = {() => updateCalculator('*')}>*</button>
           
            <button onClick = {() => updateCalculator('+')}>+</button>
            
            <button onClick = {() => updateCalculator('-')}>-</button>
          
            <button onClick = {del_ete}>Delete</button>
        
        </div>
        
        <div className = "digits">
          
          {createDigits()}
            
            <button  onClick = {() => updateCalculator('0')}>0</button>
            
            <button onClick = {() => updateCalculator('.')}>.</button>
            
            <button onClick = {calculate}> = </button>
        
        </div>
  
  </div>
    
    </div>
  );
}

export default App;