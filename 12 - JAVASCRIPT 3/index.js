let movie = document.getElementById('movie')
let year = document.getElementById('year')
let dataContainer = document.getElementById('valores')
let ulElement = document.createElement('ul')
let errorMessages = []
let alerta = []

const sendForm = event =>{
    event.preventDefault()

    console.log('Enviando formulario...')

    if(movie.value === null || movie.value === ''){
        errorMessages.push('Seguro que tienes una peli que te guste mucho, ingresala por favor')
    }

    if(year.value === null || year.value === ''){
        errorMessages.push('\nIngresa un año válido por favor')
    }

    if(errorMessages.length !== 0){
        window.alert(errorMessages)
        if(movie.value !== null && year.value !== null){
            errorMessages = []
        }
    }

    else if(alerta.length === 5){
        window.alert('¡Que buenos gustos tienes!')
    }

    else{
        alerta.push({movie, year})
        let liElement = document.createElement('li')
        liElement.appendChild(document.createTextNode(`${movie.value} ${year.value}`))
        ulElement.appendChild(liElement)
        dataContainer.appendChild(ulElement)
    }
}