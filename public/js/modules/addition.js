export let addition =()=>{
    
    const arrayNumbers = ecran.textContent.split(/x|-|\/|\+|\*/);
    const arrayOperators = ecran.textContent.split(/\d+/);
   
    arrayOperators.forEach( operator => {
        if (operator == "+" && arrayNumbers[1]){
            ecran.innerText = Number(arrayNumbers[0]) + Number(arrayNumbers[1]);
        }
    } )
    
}