const section = document.getElementById('section')
const nuevoParrafo = document.createElement('p')
nuevoParrafo.textContent = "este es un párrafo de un createElement"
const otroParrafo = document.createElement("div")
otroParrafo.innerHTML = "<strong>Soy un div en negrita</strong>"


section.appendChild(otroParrafo)
section.appendChild(nuevoParrafo)

const elemento = document.getElementById('miElemento')
elemento.remove()

//Eliminar por referencia de su padre

//const elementoP = document.getElementById('contenedor')
/* document.getElementById('elementoAEliminar').style.color = "Blue"
document.getElementById('elementoAEliminar').style.fontWeight = "900" */


//agregar la clase
 //const elementoModificar = document.getElementById('elementoAEliminar').classList.add("resaltado")

 const elementoModificar = document.getElementById('elementoAEliminar').classList.remove("resaltado")