import express from "express";
import {
  deleteProduct,
  exchangedProduct,
  getAllProduct,
  getOneProduct,
  postLike,
  postProduct,
  putProduct,
  searchProduct,
} from "../controllers/productController";

import { upload } from "../middleware/upload";
const productRouter = express.Router();

productRouter.route("/list").get(getAllProduct);

productRouter.route("/post").post(upload.array("file", 4), postProduct);

productRouter.route("/:productId(\\d+)/exchange").patch(exchangedProduct);

productRouter
  .route("/:productId(\\d+)")
  .post(postLike)
  .get(getOneProduct)
  .patch(upload.array("file", 4), putProduct)
  .delete(deleteProduct);

productRouter.route("/search").get(searchProduct);

export default productRouter;
