import { StatusCodes } from "http-status-codes";
import { Comment } from "../models/comment";
import { Post } from "../models/post";
import { checkPermission, isAdmin } from "../utils";
import { NotFoundError, UnAuthorizedError } from "../utils/errors";

export const findAll = async (req, res) => {
  const comments = await Comment.find().populate('post');
  res.status(StatusCodes.OK).json({
    success: true,
    data: comments,
  });
};

export const findAllByPost = async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.find({ post: postId });
  res.status(StatusCodes.OK).json({
    success: true,
    data: comments,
  });
};

export const findAllByLoggedInUser = async (req, res) => {
  const { userId } = req.user;
  const comments = await Comment.find({ user: userId });
  res.status(StatusCodes.OK).json({
    success: true,
    data: comments,
  });
};

export const findAllByUser = async (req, res) => {
  const { userId } = req.params;
  const comments = await Comment.find({ user: userId });
  res.status(StatusCodes.OK).json({
    success: true,
    data: comments,
  });
};

export const create = async (req, res) => {
  const { userId } = req.user;
  const { postId } = req.params;
  const post = await Post.findOne({ _id: postId });

  if (!post) {
    throw new NotFoundError(`No post with id :${id}`);
  }
  const newComment = {
    body: req.body.body,
    user: userId,
    post: postId,
  };

  const comment = await Comment.create(newComment);

  if (comment) {
    const updatedPost = await Post.findOneAndUpdate({ _id: postId }, { "$push": { "comments": comment._id } }, {
      new: true,
      runValidators: true,
    });
  }

  res.status(StatusCodes.CREATED).json({
    success: true,
    data: comment,
  });
};

// export const findOne = async (req, res) => {
//   const { id } = req.params;
//   const post = await Post.findOne({ _id: id });

//   if (!post) {
//     throw new NotFoundError(`No post with id :${id}`);
//   }

//   res.status(StatusCodes.OK).json({
//     success: true,
//     data: post,
//   });
// };

// export const update = async (req, res) => {
//   const { userId } = req.user;
//   const { id } = req.params;
//   const post = await Post.findOne({ _id: id });

//   if (!post) {
//     throw new NotFoundError(`No post with id :${id}`);
//   }

//   if (!checkPermission(userId, id)) {
//     throw new UnAuthorizedError();
//   }

//   const updatedPost = await Post.findOneAndUpdate({ _id: id }, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(StatusCodes.OK).json({
//     success: true,
//     data: updatedPost,
//   });
// };

// export const remove = async (req, res) => {
//   const { userRole, userId } = req.user;
//   const { id } = req.params;
//   const post = await Post.findOne({ _id: id });

//   if (!post) {
//     throw new NotFoundError(`No post with id :${id}`);
//   }

//   if (!checkPermission(userId, post.user) && !isAdmin(userRole)) {
//     throw new UnAuthorizedError();
//   }

//   await post.remove();

//   res.status(StatusCodes.OK).json({
//     success: true,
//     message: "Success! Post removed",
//   });
// };

// export const userAllPosts = async (req, res) => {
//   const posts = await Post.find({ user: req.params.id });
//   res.status(StatusCodes.OK).json({
//     success: true,
//     data: posts,
//   });
// };

// export const logedInUserAllPosts = async (req, res) => {
//   const posts = await Post.find({ user: req.user.userId });
//   res.status(StatusCodes.OK).json({
//     success: true,
//     data: posts,
//   });
// };
