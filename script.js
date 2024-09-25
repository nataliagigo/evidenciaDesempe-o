//Ejercicio 6: Sistema de facturación con IVA y descuentos por membresía 
//Escribe un programa que reciba una lista de precios de productos comprados, 
//determine el total de la compra y aplique las siguientes reglas: 
//• Si el cliente es miembro del programa de fidelidad, recibe un 10% de descuento en el total. 
//• Si el total de la compra excede los 300,000 pesos, se aplica un IVA del 19% sobre el total. 
//• Si el cliente no es miembro y la compra es menor a 300,000 pesos, no se aplica descuento ni IVA.
//El programa debe mostrar el total de la compra, el monto del IVA aplicado y el total final con descuentos e impuestos. 

const nombreCliente = prompt('Ingrese el nombre del cliente: ')
const clienteFidelidad = prompt(nombreCliente + ' es cliente de "fidelidad"? (s/n) ')
const compraUno = Number(prompt('Ingrese el precio de la compra número 1: '))
const compraDos = Number(prompt('Ingrese el precio de la compra número 2: '))
const compraTres = Number(prompt('Ingrese el precio de la compra número 3: '))


const totalCompra = compraUno + compraDos + compraTres

if (clienteFidelidad == 's') {
    descuentoCompra = totalCompra * 0.10
    if (totalCompra > 300000) {
        iva = (totalCompra - descuentoCompra) * 0.19
    }else {
        iva = totalCompra * 0
    }
}else if(totalCompra < 300000){
    descuentoCompra = 0
    iva = 0
}else{
    descuentoCompra = 0
    iva = totalCompra * 0.19
}
totalFinal = (totalCompra - descuentoCompra) + iva

console.log('El total de la compra fue: ' + totalCompra)
console.log('El monto del iva aplicado fue: ' + iva)
console.log('El valor del descuento es:' + descuentoCompra)
console.log('El total final con descuentos e iva es: ' + totalFinal);


