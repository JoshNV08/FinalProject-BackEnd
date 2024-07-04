const { Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({ include: "user" });
      return res.json(orders);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener las órdenes" });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "Orden no encontrada" });
      }
      return res.json(order);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener la orden" });
    }
  },
  store: async (req, res) => {
    try {
      const { cartItems, totalAmount, deliveryDetails, paymentDetails } = req.body;
      const { address, phone, comments } = deliveryDetails;
      const order = await Order.create({
        itemslist: JSON.stringify(cartItems),
        address,
        phone,
        comments,
        status: "pending",
        paymentDetails: JSON.stringify(paymentDetails),
      });
      return res.status(201).json({ success: true, order });
    } catch (error) {
      return res.status(500).json({ error: "Error al crear la orden" });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { itemslist, status, address } = req.body;

      let order = await Order.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "Orden no encontrada" });
      }

      order = await order.update({
        address,
        itemslist,
        status
      });

      return res.json(order);
    } catch (error) {
      return res.status(500).json({ error: "Error al modificar la orden" });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCount = await Order.destroy({
        where: { id },
      });

      if (deletedCount === 0) {
        return res.status(404).json({ error: "Orden no encontrada" });
      }

      return res.send("Orden eliminada con éxito!");
    } catch (error) {
      return res.status(500).json({ error: "Error al eliminar la orden" });
    }
  },
};

module.exports = orderController;
