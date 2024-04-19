const { Order } = require("../models");

async function seedOrders() {
    const orders = [];
    for (let i = 0; i < 19; i++) {
        const newOrder = {
            items: 20,
            status: 'pending',
        };
        orders.push(newOrder);
    }
    await Order.bulkCreate(orders);
    console.log('¡Se crearon las órdenes!');
}

module.exports = seedOrders;
