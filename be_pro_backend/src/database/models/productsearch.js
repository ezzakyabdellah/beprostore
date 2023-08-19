'use strict';
import { DataTypes, Model } from "sequelize-cockroachdb";

export default (sequelize) => {
  class ProductSearch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductSearch.hasMany(models.productFound, { foreignKey: 'productSearchId' });
    }
  }
  ProductSearch.init(
    {
      keywork: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'productSearch',
    }
  );
  return ProductSearch;
};
