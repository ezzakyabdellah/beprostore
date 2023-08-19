'use strict';
import { DataTypes, Model } from 'sequelize-cockroachdb';

export default (sequelize) => {
  class ProductFound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductFound.belongsTo(models.productSearch, { foreignKey: 'productSearchId' })
    }
  }
  ProductFound.init(
    {
      index: DataTypes.STRING,
      title: DataTypes.STRING,
      price: DataTypes.STRING,
      image: DataTypes.STRING,
      shippingCost: DataTypes.STRING,
      sold: DataTypes.STRING,
      hashCode: DataTypes.STRING,
      productSearchId: DataTypes.INTEGER,
      productLink: DataTypes.STRING(1000),
    },
    {
      sequelize,
      modelName: 'productFound',
    }
  );
  return ProductFound;
};
