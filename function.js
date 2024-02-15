
function soma(){
    var input = document.getElementById("number")
    var roda = document.querySelectorAll(".text")

    roda.forEach( function(element){
        element.style.animation = "curveText 1s infinite"
    })

    newInput = parseInt(input.value) + 1;
    input.value = newInput
}