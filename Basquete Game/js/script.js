window.onload = function(){
    
    //movimentação da div
    var carro = document.querySelector("#carro");
    var tela = document.querySelector("#tela");
    var acumuladorDireita = 0;
    var acumuladorEsquerda = 0;
    var acumuladorBaixo = 0;
    var zero = 0;
    var placar = document.querySelector("#placar");
    
    //movimentar pelas setas
    
    document.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
            case 37:
                if (acumuladorDireita > 0) {
                    acumuladorEsquerda = acumuladorDireita - 100;
                    carro.style.left = `${acumuladorEsquerda}` + "px";
                    acumuladorDireita = acumuladorEsquerda;
                }
                break;
    
            case 39:
                if (acumuladorDireita < 400) {
                    acumuladorDireita += 100;
                    carro.style.left = `${acumuladorDireita}` + "px";
                }
                break;
        }
    });
    
    //Criar elementos
    
    criarObj();
    
    function criarObj() {
        var element = document.createElement("span");
        var leftString = ["1px", "0px", "100px", "200px", "300px", "400px"];
        var leftValue = leftString[Math.ceil(Math.random() * (leftString.length - 1))];
        element.id = "element";
        element.style.left = `${leftValue}`;
        element.style.top = "0px";
        carro.style.top = "320px";
        tela.appendChild(element);
    }
    
    //adiciona gravidade aos elementos criados
    
    function gravity() {
        var gravity = (acumuladorBaixo += 10);
        element.style.top = `${acumuladorBaixo}` + "px";
    
        //se nao colidir
        if (acumuladorBaixo > 600) {
            placar.innerHTML = "Voce Perdeu!";
        }
    
    
        //teste de colisão
        if (element.style.top == carro.style.top & element.style.left == carro.style.left) {
            zero = zero + 112;
            placar.innerHTML = zero;
        }
    
        if ( placar.innerHTML != "Voce Perdeu!" & element.style.left == carro.style.left & acumuladorBaixo > 430) {
            acumuladorBaixo = 0;
            element.remove();
            criarObj();
        }
    }
    setInterval(gravity, 100);
    
    };
    
    //reiniciar jogo
    
    function restart() {
        window.location.reload();
    }