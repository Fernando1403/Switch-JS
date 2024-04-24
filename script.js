var resultado = document.getElementById('resultado');

function mostrar(){
    var cargo = document.getElementById('cargo').value;
    salario = 3000
    
    switch (cargo){
        case 'Dev Junior':
            resultado.innerText = `Voce é Dev Junior e seu salário é ${salario}`;
            break;
        case 'Dev Pleno':
            resultado.innerText = `Voce é Dev Pleno e seu salário é ${salario * 2}`;
            break;
        case 'Dev Senior':
            resultado.innerText = `Voce é Dev Senior e seu salário é ${salario * 3}`;
            break;
        case 'Tech Lead':
            resultado.innerText = `Voce é Tech Lead e seu salário é ${salario * 4}`;
            break;
        case 'Diretor':
            resultado.innerText = `Voce é Diretor e seu salário é ${salario * 5}`;
            break;
        default:
            resultado.innerText = `Cargo Invalido`
            break;
    }
}