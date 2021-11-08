
let touches = Array.from(document.querySelectorAll(".boutton"));
console.log(touches);
let ecran = document.querySelectorAll(".ecran");
console.log(ecran);

touches.map(button =>{
    button.addEventListener("click",(e)=>{

        const valeur = e.target
        calculer(valeur);

    })

})







    
