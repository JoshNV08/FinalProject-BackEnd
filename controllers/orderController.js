const { Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    const orders = await Order.findAll();
    return res.json(orders);
  },
  show: async (req, res) => {
    const { id } = req.params;
    np;
    const order = await Order.findByPk(id);
    return res.json(order);
  },
  store: async (req, res) => {
    const { buyer, items, status } = req.body;
    await Order.create({
      buyer,
      items,
      status,
    });
    return res.send("Orden creada con exito!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { buyer, items, status } = req.body;

    const order = await Order.findByPk(id);

    if (buyer) order.buyer = buyer;
    if (items) order.items = items;
    if (status) order.status = status;

    await order.save();

    return res.send("Orden modificada con éxito!");
  },
  destroy: async (req, res) => {},
};

module.exports = orderController;
