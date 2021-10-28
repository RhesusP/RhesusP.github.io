document.addEventListener("DOMContentLoaded", async function() {
    while(true){
        for(let i=0 ; i<carouselText.length ; i++){
            await typeSentence(carouselText[i], "#sentence");
            await waitForMs(2000);
            await deleteSentence("#sentence");
            await waitForMs(500);
        }
    }
});

const carouselText=["an IT student", "a C++ programmer", "a video game enthusiast"];

async function typeSentence(sentence, eleRef, delay = 150){
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}
  
  
function waitForMs(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef){
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
        await waitForMs(150);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

// Degueu en dessous

function getAge(){
    const currentYear = new Date();
    document.getElementById("age").innerHTML += currentYear.getFullYear() - 2001; 
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Exécution du code après chargement de la page");
    getAge();

});

//window.scrollBy(0,window.innerHeight);



const liste = document.getElementsByClassName("progress");
console.log(liste);
typeof(liste);