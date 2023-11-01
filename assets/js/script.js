const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const telefono = document.getElementById("telefono")
const carrera = document.getElementById("carrera")
const edad = document.getElementById("edad")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(nombre.value.length < 1){
        warnings += `<br>El campo Nombre no puede estar vacío, debe ingresar un dato correcto.`
        entrar = true
    }
    if(apellido.value.length < 1){
        warnings += `<br>El campo Apellido no puede estar vacío, debe ingresar un dato correcto.`
        entrar = true
    }
    if(telefono.value < 222222222 || telefono.value > 999999999){
        warnings += `<br>El campo Teléfono debe estar entre 222222222 y 999999999, debe ingresar un dato correcto.`
        entrar = true
    }
    if(carrera.value.length < 1){
        warnings += `<br>El campo Carrera no puede estar vacío, debe ingresar un dato correcto.`
        entrar = true
    }
    if(edad.value < 17 || edad.value > 60){
        warnings += `<br>La edad del estudiante debe estar entre los 17 y 60 años, debe ingresar un dato correcto.`
        entrar = true
    }
    if(mensaje.value.length < 1){
        warnings += `<br>El campo Mensaje no puede estar vacío, debe ingresar un dato correcto.`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
        alert("Mensaje no enviado. Revisa los datos ingresados.")
    }else{
        alert("Datos enviados correctamente.")
        document.getElementById("form").reset();      
    }
})
