
function sendForm(event){
    event.preventDefault()
    const mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let name = document.getElementById('nombre')
    let lastname = document.getElementById('apellido')
    let age = document.getElementById('edad')
    let email = document.getElementById('email')
    let terms = document.getElementById('terms').checked
    let comment = document.getElementById('comentario')
    let errorMessages = []

    console.log('Enviando formulario...')


    if(name.value === null || name.value === ''){
        errorMessages.push('Ingresa un nombre valido');
    }

    if(lastname.value === null || lastname.value === ''){
        errorMessages.push('\nIngresa un apellido valido');
    }

    if(age.value === null || age.value === ''){
        errorMessages.push('\nIngresa una edad valida');
    }

    if(email.value === null || name.value === '' || !email.value.match(mailformat)){
        errorMessages.push('\nIngresa un email valido');
    }

    if(terms === false){
        errorMessages.push('\nDebes aceptar los terminos y condiciones');
    }

    if(errorMessages.length !== 0){
        window.alert(errorMessages)
    }

    else{
        window.alert(`Enviando datos...\nNombre: ${name.value}\nApellido: ${lastname.value}\nEdad: ${age.value}\nEmail: ${email.value}`)
    }
}