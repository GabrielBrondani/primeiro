
let peso
let altura
let escolha
const calcular = document.querySelector('#btCalcular')
let imc
const mensagem = document.querySelector('#resultado')
calcular.onclick = function calcularIMC()

{
    peso = parseFloat(document.querySelector('#peso').value)
    altura = parseFloat(document.querySelector('#altura').value)
    escolha = document.querySelector('#selecaoGenero').value

    //CÁLCULO
    imc = peso/Math.pow(altura,2)
    switch (escolha){
        case '1':
            if(imc < 18.6)
            {
                mensagem.innerHTML="<p>HOMEM MAGRO</p><p>IMC: "+imc.toFixed(1)+"</p><img src'' alt='homem magro'>"
            }
            else if(imc > 24.9)
            {
                mensagem.innerHTML="<p>HOMEM GORDO</p><p>IMC: "+imc.toFixed(1)+"</p><img src'' alt='homem gordo'>"
            }
            else
            {
                mensagem.innerHTML="<p>HOMEM PESO IDEAL</p><p>IMC: "+imc.toFixed(1)+"</p><img src'' alt='homem peso ideal'>"
            }
        break;
        case '2':
        break;
        case '3':
        break;
        default:
    }

}