const { Order } = require("../models");

async function seedOrders() {
    const orders = [];
    const statuses = ['pending', 'completed', 'cancelled'];

    for (let i = 0; i < 20; i++) {
        const newOrder = {
            itemslist: JSON.stringify([{ name: 'Product 1', quantity: 2, price: 10 }, { name: 'Product 2', quantity: 1, price: 15 }]),
            status: statuses[Math.floor(Math.random() * statuses.length)],
            address: `Address ${i + 1}, City`,
            phone: '123-456-7890',
            comments: 'Delivery instructions or comments',
            paymentDetails: JSON.stringify({ method: 'Credit Card', amount: 25 }),
        };
        orders.push(newOrder);
    }

    await Order.bulkCreate(orders);
    console.log('the seeders of orders are running');
}

module.exports = seedOrders;
