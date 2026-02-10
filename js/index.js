const etiqueta = document.getElementById('section')


etiqueta.innerHTML = '<span>soy el primer span</span><span> Yo existo desde el cambio</span>'

const imagendog = document.getElementById('imagen1')



imagendog.src = "./images/dog.jpg"
imagendog.alt ="Imagen de perrito"
imagendog.title ="Imagen de perrito descansando"


const enlace = document.getElementById('enlace')

enlace.setAttribute("target", "_blank")