function girar(){
	boton.setAttribute('disabled','disabled');
	resultado.innerHTML='Girando...';
	dado.style.transitionDuration='0ms';
	dado.style.transform='rotateX(360deg) rotateY(1080deg) rotateZ(360deg)';
	setTimeout(tirar,10)
}

function tirar(){	
	
	dado.style.transitionDuration='3s';
	
	//calcular el número
    var numero = Math.floor(Math.random()*6)+1;
                        
    //hacer la rotación pertinente
    switch(numero){
        case 1: dado.style.transform='rotateX(90deg) rotateY(0deg) rotateZ(0deg)';break;
        case 2: dado.style.transform='rotateX(-90deg) rotateY(0deg) rotateZ(0deg)';break;
        case 3: dado.style.transform='rotateX(0deg) rotateY(90deg) rotateZ(0deg)';break;
        case 4: dado.style.transform='rotateX(0deg) rotateY(270deg) rotateZ(0deg)';break;
        case 5: dado.style.transform='rotateX(0deg) rotateY(0deg) rotateZ(0deg)';break;
        case 6: dado.style.transform='rotateX(0deg) rotateY(180deg) rotateZ(10deg)';break;
    }
    
    setTimeout(function(){
    	boton.removeAttribute('disabled');
    	resultado.innerHTML=numero;
    },3100);
}