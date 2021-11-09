import {  } from "./modules/addition.js";


let buttons = Array.from(document.querySelectorAll(".boutton"));
console.log(buttons);
let ecran = document.querySelector("#ecran");
console.log(ecran);


buttons.map(boutton => {
    boutton.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "c":
                ecran.innerText = "";

                break;
            case "=":
                // const calcul = eval(ecran.textContent);
                // ecran.textContent = calcul;
                console.log(ecran.textContent);
                const arrayNumbers = ecran.textContent.split(/x|-|\/|\+|\*/);
                const arrayOperators = ecran.textContent.split(/\d+/);

                arrayOperators.forEach( operator => {
                    if (operator == "+" && arrayNumbers[1]){
                        ecran.innerText = Number(arrayNumbers[0]) + Number(arrayNumbers[1]);
                    }
                    else if (operator == "-" && arrayNumbers[1]) {
                        ecran.innerText = Number(arrayNumbers[0]) - Number(arrayNumbers[1]);
                        
                    }
                    else if (operator == "*" && arrayNumbers[1]) {
                        ecran.innerText = Number(arrayNumbers[0]) * Number(arrayNumbers[1]);
                        
                    }
                    else if (operator == "/" && arrayNumbers[1]) {
                        ecran.innerText = Number(arrayNumbers[0]) / Number(arrayNumbers[1]);
                        
                    }
                    
                } )
                break;

            default:
                ecran.innerText += e.target.innerText;
                ecran.style.color = "white"

                break;

        }

    })
    
    window.addEventListener('error',(e)=>{
        alert('une erreur est survenue dans votre calcule:' + e.message);
    });
            
})







