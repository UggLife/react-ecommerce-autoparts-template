const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController.js');

/* PRODUCT ROUTES */

router.get('/products/:userId', productController.getProductsByUserId, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.user);
});

router.get('/products/:orderId', productController.getProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.product);
});

router.get('/products', productController.getAllProducts, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json({ products: res.locals.products });
});

router.get('/productsByUser/:id', productController.getAllProductsByUser, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.products);
});

router.post('/products', productController.createProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.product);
});

router.patch('/products/:orderId', productController.updateProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  else res.status(200).json(res.locals.productupdated);
});

router.delete('/products/:orderId', productController.deleteProduct, (req, res) => {
  if (res.locals.error) res.status(400).json(res.locals.error);
  return res.status(200).json({ status: 200, message: 'Succesfully deleted the order' });
});

module.exports = router;