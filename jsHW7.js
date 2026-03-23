var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};
services['Розбити скло'] = "200 грн";

services.totalPrice = function() {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] !== "function") {
            total += parseInt(this[key]);
        }
    }
    return total + " грн";
};

services.minPrice = function() {
    let min = Infinity;
    for (let key in this) {
        if (typeof this[key] !== "function" && min > parseInt(this[key])) {
            min = parseInt(this[key]);
        }
    }
    return min + " грн";
};

services.maxPrice = function() {
    let max = 0;
    for (let key in this) {
        if (typeof this[key] !== "function" && max < parseInt(this[key])) {
            max = parseInt(this[key]);
        }
    }
    return max + " грн";
};

console.log("Загальна вартість:", services.totalPrice());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());