function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 50;
    const perTableWood = 100;
    const perBedWood = 500;
    const chairWoodQuantity = perChairWood * chairQuantity;
    const tabelWoodQuantity = perTableWood * tableQuantity;
    const bedWoodQuantity = perBedWood * bedQuantity;

    const totalWood = chairWoodQuantity + tabelWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const furnitureWood = woodCalculator(10,5,3);
console.log(furnitureWood);