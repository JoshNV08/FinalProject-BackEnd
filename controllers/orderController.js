const { Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    const orders = await Order.findAll();
    return res.json(orders);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    return res.json(order);
  },
  store: async (req, res) => {
    const { buyer, items, status, email, password } = req.body;
    await Order.create({
      buyer,
      items,
      status,
      email,
      password,
    });
    return res.send("Orden creada con éxito!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { buyer, items, status, email, password } = req.body;

    const order = await Order.findByPk(id);

    if (buyer) order.buyer = buyer;
    if (items) order.items = items;
    if (status) order.status = status;
    if (email) order.email = email;
    if (password) order.password = password;

    await order.save();

    return res.send("Orden modificada con éxito!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    await order.destroy();

    return res.send("Orden eliminada con éxito!");
  },
};

module.exports = orderController;
