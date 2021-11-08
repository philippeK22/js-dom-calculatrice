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

                break;

            default:
                ecran.innerText += e.target.innerText;
                ecran.style.color = "white"

                break;
        }

    })

})


let operator = ["+", "-", "*", "/"];
let operatorFound;
operator.forEach(el => {
    el.indexOf([operator]);

    switch (operator) {
        case "+":
            ecran


            break;
        case "-":

            break;
        case "*":

            break;
        case "/":

            break;
        


        default:
            break;
    }

});
// let a = ecran.addEventListener("click",()=>{
//     ecran.innerText = operator;    
// })