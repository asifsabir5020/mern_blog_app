import express from "express";
import {
  create, findAll, findAllByLoggedInUser, findAllByPost, findAllByUser
} from "../controllers/commentController";
import { authenticate, authorize } from "../middlewares/auth";
const commentRouter = express.Router();

commentRouter.route("/user").get(authenticate, findAllByLoggedInUser);
commentRouter.route("/user/:userId").get(authenticate, findAllByUser);
commentRouter.route("/:postId").get(findAllByPost).post(authenticate, create);
commentRouter.route("/").get(authenticate, authorize('admin'), findAll);


export { commentRouter };
