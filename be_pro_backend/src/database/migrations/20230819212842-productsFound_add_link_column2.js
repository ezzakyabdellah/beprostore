'use strict';

export async function up(queryInterface, Sequelize) {
  queryInterface.changeColumn("productFounds", "productLink", {
    allowNull: true,
    type: Sequelize.STRING(1000),
  });
}
export async function down(queryInterface) {
  queryInterface.removeColumn("productFounds", "productLink");
}

