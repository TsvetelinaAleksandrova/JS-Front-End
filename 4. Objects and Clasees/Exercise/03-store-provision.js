function solve(stock, delivery) {
    const store = {};

    for (let i = 0; i < stock.length; i+= 2) {
        const product = stock[i];
        const quantity = Number(stock[i + 1]);

        store[product] = quantity;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        const product = delivery[i];
        const quantity = Number(delivery[i + 1]);

        if (!store[product]) {
            store[product] = 0;
        }
        store[product] += quantity;
    }
    for (const product in store) {
        console.log(`${product} -> ${store[product]}`)
    }
}