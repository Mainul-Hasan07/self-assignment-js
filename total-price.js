const cart = [
    {name: 'laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 3680, quantity: 3},
    {name: 'phone', price: 55000, quantity: 1}
];

function getCart(cartArray){
    let totalCart = 0;
    for(const product of cart){
        totalCart += (product.price * product.quantity);
    }
    return totalCart;
}

const total = getCart(cart);
console.log(total);