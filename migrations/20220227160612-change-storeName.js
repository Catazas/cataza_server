"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn("Stores", "name", "storeName");
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn("Stores", "storeName", "name");
  },
};
