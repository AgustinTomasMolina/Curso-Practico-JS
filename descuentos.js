/* const precioOriginal = 120;
const descuento = 18; */


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;   

    return precioConDescuento;
}


const coupons = [
        "JuanDC_es_Batman",
        "pero_no_le_digas_a_nadie",
        "es_un_secreto",
    ];

function totalPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue  = InputCoupon.value;
    
    let descuento;

    switch(couponValue) {
        case coupons[0]:
            descuento = 15;
            break;
        case coupons[1]:
            descuento = 30;
            break;
        case coupons[2]:
            descuento = 30;
            break;
            default: 0;
    }

      

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}