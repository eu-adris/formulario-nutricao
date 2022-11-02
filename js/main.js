var titulo = document.querySelector('.titulo').textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i])

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector('.info-peso')

    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent

    tdImc = paciente.querySelector('.info-imc')

    var imc = peso / (altura * altura)

    tdImc.textContent = imc

    var alturaEhValida = validaAltura(altura)
    var pesoEhValido = validaPeso(peso)

    if (!pesoEhValido) {
        console.log('peso invávlido')
        tdImc.textContent = 'peso inválido'
        pesoEhValido = false
        paciente.classList.add('paciente-invalido')
    }

    if (!alturaEhValida) {
        console.log('altura invávlido')
        tdAltura.textContent = 'altura inválido'
        alturaEhValida = false
        paciente.classList.add('paciente-invalido')
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    } else {
        tdImc.textContent = 'altura ou peso inválidos'
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true
    } else {
        false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true
    } else {
        return false
    }
}

function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}



