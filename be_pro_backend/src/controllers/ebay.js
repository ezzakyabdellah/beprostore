import db from '@/database';

export const getProducts = async (req, res, next) => {
  const { search: searchProduct } = req.params

  const [productSearch, created] = await db.models.productSearch.findOrCreate({
    where: { keywork: searchProduct },
  });

  const productsList = await db.models.productFound.findAll({
    where: {
      productSearchId: productSearch.id,
    },
  });

  return res.status(200).json(productsList);
};
