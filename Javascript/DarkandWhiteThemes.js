window.onload=InitialiserEvenements;

function InitialiserEvenements(){
    document.getElementById("buttons").addEventListener("click", traiter); 
    traiter(); 
}

function traiter(){
    document.body.classList.toggle("bk-white");
   
}
