
//FUNCION: areaTriangulo()

//DESCRIPCION
//retorna el área del triángulo en función de su base y altura

//PROTOTIPO
//number areaTriangulo(number base, number altura)

//PARAMETROS:
//base: numérico y obligatorio
//altura: numérico y obligatorio

//VALOR DE RETORNO:
//el resultado del cálculo, de tipo numérico
function areaTriangulo(base, altura){
	return base*altura/2;
}


//FUNCION: areaRectangulo()

//DESCRIPCION
//retorna el área del rectángulo en función de su base y altura

//PROTOTIPO
//number areaRectángulo(number base, number altura)

//PARAMETROS:
//base: numérico y obligatorio
//altura: numérico y obligatorio

//VALOR DE RETORNO:
//el resultado del cálculo, de tipo numérico
function areaRectangulo(base, altura){
	return base*altura;
}


//FUNCION: areaCirculo()

//DESCRIPCION
//retorna el área del círculo en función de su radio

//PROTOTIPO
//number areaCírculo(number radio)

//PARAMETROS:
//radio: numérico y obligatorio

//VALOR DE RETORNO:
//el resultado del cálculo, de tipo numérico
function areaCirculo(radio){
	return Math.PI*radio*radio;
}


//FUNCION: hipotenusa()

//retorna el valor de la hipotenusa de un triángulo rectángulo, dados los dos catetos

//PROTOTIPO: number hipotenusa(number a, number b)

//PARAMETROS:
// a: cateto 1
// b: cateto 2

//VALOR DE RETORNO:
//resultado del cálculo de la hipotenusa

function hipotenusa(a, b){
	return Math.sqrt(a*a+b*b);
}