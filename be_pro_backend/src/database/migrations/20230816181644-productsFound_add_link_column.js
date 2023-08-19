'use strict';

export async function up(queryInterface, Sequelize) {
  queryInterface.addColumn("productFounds", "productLink", {
    allowNull: true,
    type: Sequelize.STRING,
  });
}
export async function down(queryInterface) {
  queryInterface.removeColumn("productFounds", "productLink");
}
