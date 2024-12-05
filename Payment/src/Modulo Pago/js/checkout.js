const imp = document.querySelector('#imp')
const costo = document.querySelector('#costo')
const total = document.querySelector('#total')
// const paypal = document.querySelector('#paypal') 
const efectivo = document.querySelector('#efectivo') 
const checkout = document.querySelector('#checkout')
const costoPorServicio = 500.00


const calcularImp = () => {

    const totalImp = costoPorServicio * 0.18;
    return totalImp;

}


const totalServicio = () => {

    const totalServicio = costoPorServicio + calcularImp();
    return totalServicio;

}



document.addEventListener('DOMContentLoaded', () => {

    costo.innerHTML = `RD$ ${costoPorServicio}.00`;
    imp.innerHTML = `RD$ ${calcularImp()}.00`;
    total.innerHTML = `RD$ ${totalServicio()}.00`;
})



