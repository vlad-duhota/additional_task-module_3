const cart = {
    products: [],
    add(product) {
        this.products.push(product);
    },
    remove(productName) {
        for (const object of this.products) {
            if (object.name === productName) {
                const index = this.products.indexOf(object);
                this.products.splice(index, 1);
            }
        }
    },
    clear() {
        this.products = [];
    },
    getTotalPrice() {
        let total = 0;
        for (const object of this.products) {
            total += (object.price * object.quantity);
        }
        return total;
    },
    increaseQuantity(productName) {
        for (const object of this.products) {
            if (object.name === productName) {
                object.quantity = object.quantity + 1;
            }
        }
    },
    decreaseQuantity(productName) {
        for (const object of this.products) {
            if (object.name === productName) {
                object.quantity = object.quantity - 1;
            }
        }
    },
    order() {
        let product = '';

        for (const object of this.products) {
            const { name, price, quantity} = object;
            product = product + ` \n ${name}  ${quantity} * ${price} = ${price * quantity} \n ---------`; 
        }

        console.log(
            `--------- \n Чек  ${product} \n Сума = ${this.getTotalPrice()} \n --------- \n Дякуємо за покупку`
        );
    }
}

cart.add({ name: 'apple', price: 4, quantity: 2 });
cart.add({ name: 'tomate', price: 8, quantity: 3 });
cart.order();