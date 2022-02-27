const { Store, Product } = require("../models");

class StoreController {
  static async getStore(req, res, next) {
    try {
      const { id } = req.user;

      const currentStore = await Store.findOne({
        where: { UserId: id },
        include: [Product],
      });

      res.status(200).json(currentStore);
    } catch (err) {
      next(err);
    }
  }

  static async createStore(req, res, next) {
    try {
      const { id } = req.user;
      const { storeName, address } = req.body;

      const result = await Store.create({ storeName, address, UserId: id });
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
    }
  }

  static async editStore(req, res, next) {
    try {
      const { id } = req.params;
      const { storeName, address } = req.body;

      const updatedStore = await Store.update(
        { storeName, address },
        {
          where: { id },
          returning: true,
        }
      );
      res.status(200).json(updatedStore[1][0]);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = StoreController;
