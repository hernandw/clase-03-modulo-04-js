//accediendo a traves de su ID

/* const titulo = document.getElementById('title')

 titulo.innerHTML = "Soy el titulo modificado desde JS con getElementByID" */

 const titulo = document. querySelector('#title')
  titulo.innerHTML= "<strong>Soy el titulo <span id='modificado'>modificado</span> desde JS con query Selector</strong>"
console.log(titulo)