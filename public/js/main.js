import {addition  } from "./modules/addition.js";
import { soustraction } from "./modules/soustraction.js";
import { multiplication } from "./modules/multiplication.js";
import { division } from "./modules/division.js";


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
                    addition();
                    soustraction();
                    multiplication();
                    division();
                    break;
            
            default:
                ecran.innerText += e.target.innerText;
                ecran.style.color = "white"

                break;

        }

    })
    
    // window.addEventListener('error',(e)=>{
    //     alert('une erreur est survenue dans votre calcule:' + e.message);
    // });
            
})







