class Product {
    constructor(productName, price, stockQuantity) {
        this.productName = productName;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }

    addToStock(quantity) {
        this.stockQuantity += quantity;
        this.logStockToConsole();
    }

    removeFromStock(quantity) {
        this.stockQuantity -= quantity;
        this.logStockToConsole();
    }

    logStockToConsole() {
        console.log(`Current stock for ${this.productName} is now ${this.stockQuantity}.`);
    }
}


class DiscountProduct extends Product {
    constructor(productName, price, stockQuantity, discount) {
        super(productName, price, stockQuantity);
        this.discount = discount;
    }

    getDiscountedPrice() {
        let price = this.price - this.price * (this.discount / 100);
        return price;
    }

    logDiscountedPrice() {
        let discountedPrice = this.getDiscountedPrice();
        console.log(`Price with discount for ${this.productName} is ${discountedPrice}.`);
    }
}

const bike = new Product('Bicicleta', 750, 1000);

const product2 = {
    productName: 'Bicicleta',
    price: 750,
    stockQuantity: 1000
}

const laptop = new Product('Laptop', 2500, 300);

console.log(bike);

console.log(product2);

console.log(laptop);

bike.addToStock(100);

console.log(bike);

laptop.removeFromStock(200);

console.log(laptop);

laptop.addToStock(300);
laptop.removeFromStock(300);
laptop.addToStock(200);

const smartphone = new DiscountProduct('Smartphone', 3000, 200, 20);

console.log(smartphone);

smartphone.removeFromStock(23);

// const phoneDiscountedPrice = smartphone.getDiscountedPrice();
// console.log(`Price with discount for ${smartphone.productName} is ${phoneDiscountedPrice}.`);
smartphone.logDiscountedPrice();