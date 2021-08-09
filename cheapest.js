const phones =[
    {name: 'samsung', price: 45000, camera: 10, storage: 32},
    {name: 'walton m32', price: 15000, camera:8, storage: 8},
    {name: 'shaomi m3', price: 12000, camera:8, storage: 16},
    {name: 'oppo a2', price: 17000, camera:8, storage: 32},
    {name: 'nodia n95', price: 8000, camera:8, storage: 4},
    {name: 'htc h81', price: 25000, camera:8, storage: 16},
];

function getCheapestPhone(phoneArray){
    let cheapestPhone = phones[0];
    for(const phone of phones){
        if(phone.price < cheapestPhone.price){
            cheapestPhone = phone;
        }
    }return cheapestPhone;
}

const cheapest = getCheapestPhone(phones);
console.log(cheapest);