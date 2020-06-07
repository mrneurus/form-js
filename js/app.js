const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formulario = document.getElementById('enviar-mail')
const btnReset = document.getElementById('resetBtn')

// event Listener

evenListeners();

function evenListeners() {
  // deshabilita boton  enviar

  document.addEventListener("DOMContentLoaded", inicioApp);

  // campos
  email.addEventListener("blur", validarCampo);
  asunto.addEventListener("blur", validarCampo);
  mensaje.addEventListener("blur", validarCampo);

// boton enviar
btnEnviar.addEventListener('click',enviarEmail)

// boton reset

btnReset.addEventListener('click',botonReset)

}

// functions
function inicioApp() {
  // anula el envio
  btnEnviar.disabled = true;
}

// valida campo

function validarCampo() {
  let errores = document.querySelectorAll(".error");

  // longitud y vacio
  validarLongitud(this);

  // validar email

   if(this.type === 'email'){
      validarEmail(this)
  } 

  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}

// enviar

function enviarEmail(e){
    e.preventDefault()
    const spinnerGif = document.querySelector('#spinner')
    spinnerGif.style.display='block'

    const enviado = document.createElement('img')
    enviado.src='img/mail.gif'
    enviado.style.display = 'block'
    // oculta loader
    setTimeout(function(){
        spinnerGif.style.display='none'
        document.querySelector('#loaders').appendChild(enviado)
            setTimeout(function(){
                enviado.remove()
                formulario.reset()
            },5000)
    }, 3000)


}

function botonReset(e){
  formulario.reset()
  e.preventDefault()

}

function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}
function validarEmail(campo){
    let campoArroa= campo.value
    if (campoArroa.indexOf('@gmail.com') !== -1 ||campoArroa.indexOf('@live.com') !== -1){
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    }else{
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
    
}

