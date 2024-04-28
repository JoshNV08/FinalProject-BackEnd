const { Order } = require("../models");

async function seedOrders() {
    const orders = [];
    for (let i = 0; i < 19; i++) {
        const newOrder = {
            itemslist: 20,
            status: 'pending',
            address: "casita"
        };
        orders.push(newOrder);
    }
    await Order.bulkCreate(orders);
    console.log('the seeders of orders are running');
}

module.exports = seedOrders;
