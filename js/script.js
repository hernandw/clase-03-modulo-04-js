
const contenedorP = document.getElementById('contenedor')

contenedorP.addEventListener("click", ()=>{
    console.log("me hiciste click")
})


const botonP = document.getElementById('botton')


/* botonP.onclick = ()=>{
    saludar()
} */


botonP.addEventListener("click", (e)=>{
e.stopPropagation()
saludar()
}) 


function saludar(){
    alert("Hola como estas")
}

const elementPadre = document.getElementById('lista')

elementPadre.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        alert("click en " + e.target.textContent)
    }
})