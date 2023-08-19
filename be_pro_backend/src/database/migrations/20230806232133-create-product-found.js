'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('productFounds', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    index: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    shippingCost: {
      type: Sequelize.STRING
    },
    sold: {
      type: Sequelize.STRING
    },
    hashCode: {
      type: Sequelize.STRING,
    },
    productSearchId: {
      type: Sequelize.INTEGER,
      references: {
        model: "productSearches",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade", 
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('productFounds');
}