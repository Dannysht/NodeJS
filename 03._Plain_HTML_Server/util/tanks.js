const {tanks} = require("./tanks.json")

function getTanks()
{
    return tanks
}

function addTank(tank)
{
    tanks.push(tank)
    return tanks
}

module.exports = {
    getTanks,
    addTank
}

/*const tanks1 = [
    { name: "Leopard", nationality: "Germany" },
    { name: "Tiger", nationality: "Germany", year: 1943 },
    { name: "M1 Abrams", version: "M1" }
];*/