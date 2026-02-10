//accediendo a traves de su ID

/* const titulo = document.getElementById('title')

 titulo.innerHTML = "Soy el titulo modificado desde JS con getElementByID" */

/*  const titulo = document.querySelector('#title')
  titulo.innerHTML= "<strong>Soy el titulo <span id='modificado'>modificado</span> desde JS con query Selector</strong>"
console.log(titulo) */


//acceder por su clase
//const parrafo = document.querySelector('#parrafo')


//todos los elementos por su clase

/* const parrafo = document.querySelectorAll('.paragraph')

parrafo[2].textContent = "Soy el párrafo #3 Modificado desde JS" */
const parrafo = document.getElementsByClassName('paragraph')
console.log(parrafo)


//Modificar el texto 

document.querySelector('#title').textContent = "Ahora soy un nuevo titulo"