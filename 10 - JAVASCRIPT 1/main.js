const info = (nombre, apellido, edad) => {
    if(typeof nombre !== 'string' || typeof apellido !== 'string' || typeof edad !== 'number'){
        console.log('Tipos de datos no validos')
    }

    else if(edad < 18){
        console.log(nombre, apellido, 'Eres menor de edad');
    }

    else if(edad >= 18){
        console.log(nombre, apellido, 'Eres mayor de edad');
    }

    else if(edad > 60){
        console.log(nombre, apellido, 'Eres mayor y estas en la tercera edad');
    }
}

info('Bautista', 'Zaballa', 23)

