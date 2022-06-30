const cart = {
    products: [],
    add(product) {
        this.products.push(product);
    },
    remove(productName) {
        for (const product of this.products) {
            if (product.name === productName) {
                const index = this.products.indexOf(product);
                this.products.splice(index, 1);
            }
        }
    },
    clear() {
        this.products = [];
    },
    getTotalPrice() {
        let total = 0;
        for (const product of this.products) {
            total += product.price * product.quantity;
        }
        return total;
    },
    increaseQuantity(productName) {
        for (const product of this.products) {
            if (product.name === productName) {
                product.quantity = product.quantity + 1;
            }
        }
    },
    decreaseQuantity(productName) {
        for (const product of this.products) {
            if (product.name === productName) {
                product.quantity = product.quantity - 1;
            }
        }
    },
    changePrice(productName, newPrice){
        for (const product of this.products) {
            if (product.name === productName) {
                product.price = newPrice;
            }
        }
    },
    getProductsNames(){
        const names = [];
        for (const product of this.products) {
            names.push(product.name);
        }
        return names;
    },
    generateRandomPhrase(){
        const phrases = ['Сьогодні вам пощастить з грошшима', 'Вас буде переслідувати удача', 'Сьогодні вам прийде погана новина', 'Вас чекає подарунок від близького', 'Сьогодні у вас будуть скланощі на роботі'];
        const randomIndex = Math.round(Math.random() * (phrases.length - 1));
        return phrases[randomIndex];
    },
    order() {
        let products = '';

        for (const product of this.products) {
            const { name, price, quantity} = product;
            products = products + `${name}  ${quantity} * ${price} грн = ${price * quantity} грн \n ---------\n`; 
        }

        console.log(
            `--------- \n Чек  ${products} Сума = ${this.getTotalPrice()} грн \n --------- \n Дякуємо за покупку \n --------- \n ${this.generateRandomPhrase()}`
        );
    }
}

cart.add({ name: 'apple', price: 4, quantity: 2 });
cart.add({ name: 'tomate', price: 8, quantity: 3 });
cart.order();

// const apple = {
//     name: 'Яблуко',
//     price: 9.99,
//     quantity: 3,
//     totalPrice: 12
//   };
  
//   const orange = {
//     name: 'Апельсин',
//     price: 12,
//     quantity: 1,
//   };

// const {name: productName, ...other} = apple;

// console.log(productName);
// console.log(other);

// const combinedProduct = {
//     ...apple,
//     ...orange,
// }

// console.log(combinedProduct);

// const products = ['Aпельсин', 'Яблуко'];

// const [product1, product2] = products;
// console.log(product1);