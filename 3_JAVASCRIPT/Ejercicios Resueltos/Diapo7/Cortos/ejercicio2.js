//función descuento()

//retorna un precio con un descuento aplicado

//PROTOTIPO: float descuento(float p, float d)

//PARAMETROS: 
//precio: obligatorio, importe del producto
//descuento: obligatorio, descuento a aplicar entre 0 y 100

//VALOR DE RETORNO:
//precio con el descuento aplicado o NaN si:
// - el precio es negativo
// - el descuento es negativo
// - el descuento es >100

function descuento(p, d){
	if(p<0 || d<0 || d>100)
		return NaN;

	return p-p*d/100;
}