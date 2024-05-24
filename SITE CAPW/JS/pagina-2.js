//Botão Dark-mode
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('check');
    
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

//Ocultar e expor section de apresentação
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const apresentacaoSection = document.getElementById('apresentacao');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            apresentacaoSection.classList.remove('hidden');
        });
    });
});

//informações dos integrantes do grupo 
let integrantes = [
{
    marca: 'Fiat',   
    modelo: 'Argo',
    ano: '2022',
    foto: 'CAR/fiat-argo.jpeg', 
    consumo: '14,2km/l',
    motor: 'As versões de entrada do Argo são equipadas com o motor 1.0 Firefly de 3 cilindros, que oferece 71/15 cv (gasolina/etanol) de potência e 98/105 Nm (g/e) de torque, sempre com câmbio manual de 5 marchas. Já as versões intermediárias e a topo de linha Trekking trazem o motor 1.3 flex de 98/107 cv (g/e) e 129/131 Nm (g/e), que pode ser associado a um câmbio manual de 5 marchas ou um automático do tipo CVT com simulação de 7 marchas.',
    cambio: '77'     
},

{
    marca: 'Fiat',   
    modelo: 'Argo',
    ano: '2022',
    foto: 'CAR/fiat-toro.jpeg', 
    consumo: '14,2km/l',
    motor: 'As versões de entrada do Argo são equipadas com o motor 1.0 Firefly de 3 cilindros, que oferece 71/15 cv (gasolina/etanol) de potência e 98/105 Nm (g/e) de torque, sempre com câmbio manual de 5 marchas. Já as versões intermediárias e a topo de linha Trekking trazem o motor 1.3 flex de 98/107 cv (g/e) e 129/131 Nm (g/e), que pode ser associado a um câmbio manual de 5 marchas ou um automático do tipo CVT com simulação de 7 marchas.',
    cambio: '77' 
},

{
    marca: 'Fiat',   
    modelo: 'Argo',
    ano: '2022',
    foto: 'CAR/honda-city.jpg', 
    consumo: '14,2km/l',
    motor: 'As versões de entrada do Argo são equipadas com o motor 1.0 Firefly de 3 cilindros, que oferece 71/15 cv (gasolina/etanol) de potência e 98/105 Nm (g/e) de torque, sempre com câmbio manual de 5 marchas. Já as versões intermediárias e a topo de linha Trekking trazem o motor 1.3 flex de 98/107 cv (g/e) e 129/131 Nm (g/e), que pode ser associado a um câmbio manual de 5 marchas ou um automático do tipo CVT com simulação de 7 marchas.',
    cambio: '77' 
},

{
    marca: 'Fiat',   
    modelo: 'Argo',
    ano: '2022',
    foto: 'CAR/honda-civic-TypeR.jpg', 
    consumo: '14,2km/l',
    motor: 'As versões de entrada do Argo são equipadas com o motor 1.0 Firefly de 3 cilindros, que oferece 71/15 cv (gasolina/etanol) de potência e 98/105 Nm (g/e) de torque, sempre com câmbio manual de 5 marchas. Já as versões intermediárias e a topo de linha Trekking trazem o motor 1.3 flex de 98/107 cv (g/e) e 129/131 Nm (g/e), que pode ser associado a um câmbio manual de 5 marchas ou um automático do tipo CVT com simulação de 7 marchas.',
    cambio: '77' 
},

{
    marca: 'Peugeot',   
    modelo: '208',
    ano: '2022',
    foto: 'CAR/peugeot-208.jpeg', 
    consumo: '14,2km/l',
    motor: '77.',
    cambio: '77'
},

{
    marca: 'Peugeot',   
    modelo: '208',
    ano: '2022',
    foto: 'CAR/corolla-hibrido.jpg', 
    consumo: '14,2km/l',
    motor: '77.',
    cambio: '77'
},

{
    marca: 'Peugeot',   
    modelo: '208',
    ano: '2022',
    foto: 'CAR/subaru-wrx-sti.webp', 
    consumo: '14,2km/l',
    motor: '77.',
    cambio: '77'
},

{
    marca: 'Peugeot',   
    modelo: '208',
    ano: '2022',
    foto: 'CAR/renault-captur.jpg', 
    consumo: '14,2km/l',
    motor: '77.',
    cambio: '77'
}

]

//função para selecionar cada integrante
function infos(index){
    let marca = document.querySelector('#marca')
    let modelo = document.querySelector('#modelo')
    let ano = document.querySelector('#ano')
    let foto = document.querySelector('#imagem-alunos')
    let consumo = document.querySelector('#consumo')
    let motor = document.querySelector('#motor')
    let cambio = document.querySelector('#cambio')

    if(index == 0){
        marca.innerHTML = integrantes[0].marca
        modelo.innerHTML = integrantes[0].modelo
        ano.innerHTML = integrantes[0].ano
        foto.src = integrantes[0].foto
        consumo.innerHTML = integrantes[0].consumo
        motor.innerHTML = integrantes[0].motor
        cambio.innerHTML = integrantes[0].cambio
    }else if(index == 1){
        marca.innerHTML = integrantes[1].marca
        modelo.innerHTML = integrantes[1].modelo
        ano.innerHTML = integrantes[1].ano
        foto.src = integrantes[1].foto
        consumo.innerHTML = integrantes[1].consumo
        motor.innerHTML = integrantes[1].motor
        cambio.innerHTML = integrantes[1].cambio
    }else if(index == 2){
        marca.innerHTML = integrantes[2].marca
        modelo.innerHTML = integrantes[2].modelo
        ano.innerHTML = integrantes[2].ano
        foto.src = integrantes[2].foto
        consumo.innerHTML = integrantes[2].consumo
        motor.innerHTML = integrantes[2].motor
        cambio.innerHTML = integrantes[2].cambio
    }else if(index == 3){
        marca.innerHTML = integrantes[3].marca
        modelo.innerHTML = integrantes[3].modelo
        ano.innerHTML = integrantes[3].ano
        foto.src = integrantes[3].foto
        consumo.innerHTML = integrantes[3].consumo
        motor.innerHTML = integrantes[3].motor
        cambio.innerHTML = integrantes[3].cambio
    }else if(index==4){
        marca.innerHTML = integrantes[4].marca
        modelo.innerHTML = integrantes[4].modelo
        ano.innerHTML = integrantes[4].ano
        foto.src = integrantes[4].foto
        consumo.innerHTML = integrantes[4].consumo
        motor.innerHTML = integrantes[4].motor
        cambio.innerHTML = integrantes[4].cambio
    }else if(index==5){
        marca.innerHTML = integrantes[5].marca
        modelo.innerHTML = integrantes[5].modelo
        ano.innerHTML = integrantes[5].ano
        foto.src = integrantes[5].foto
        consumo.innerHTML = integrantes[5].consumo
        motor.innerHTML = integrantes[5].motor
        cambio.innerHTML = integrantes[5].cambio
    }else if(index==6){
        marca.innerHTML = integrantes[6].marca
        modelo.innerHTML = integrantes[6].modelo
        ano.innerHTML = integrantes[6].ano
        foto.src = integrantes[6].foto
        consumo.innerHTML = integrantes[6].consumo
        motor.innerHTML = integrantes[6].motor
        cambio.innerHTML = integrantes[6].cambio
    }else{
        marca.innerHTML = integrantes[7].marca
        modelo.innerHTML = integrantes[7].modelo
        ano.innerHTML = integrantes[7].ano
        foto.src = integrantes[7].foto
        consumo.innerHTML = integrantes[7].consumo
        motor.innerHTML = integrantes[7].motor
        cambio.innerHTML = integrantes[7].cambio
}}

//função para botões do carrossel
let contador = 1
function avancar(){
    if(contador < 6){
        infos(contador)
        contador++
    }
    console.log(contador)
}

function voltar(){
    if(contador > 0){
        infos(contador)
        contador--
    }
    console.log(contador)
}

