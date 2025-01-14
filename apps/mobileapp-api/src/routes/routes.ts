import * as userController from '../controllers/userController';
import * as postingController from '../controllers/postingController';
import * as commentController from '../controllers/commentController';

import { RouteOptions } from 'fastify';

type RouteConfig = Record<string, RouteOptions>;

const routes: RouteConfig = {
  // getOfficialFood: {
  //   method: 'GET',
  //   url: '/officialfood',
  //   handler: foodController.getOfficialFood,
  // },
  // getPersonalFood: {
  //   method: 'GET',
  //   url: '/personalfood',
  //   handler: foodController.getPersonalFood,
  // },
  // addFood: {
  //   method: 'POST',
  //   url: '/addfood',
  //   handler: foodController.addFood,
  // },
  // removeFood: {
  //   method: 'DELETE',
  //   url: '/removefood/:foodId',
  //   handler: foodController.removeFood,
  // },
  // updateFood: {
  //   method: 'PUT',
  //   url: '/updateFood/:foodId',
  //   handler: foodController.updateFood,
  // },
  // removeAllFood: {
  //   method: 'DELETE',
  //   url: '/removeallfood',
  //   handler: foodController.removeAllFood,
  // },
  // getUserFood: {
  //   method: 'GET',
  //   url: '/food/:userId',
  //   handler: foodController.getUserFood,
  // },
  updateUser: {
    method: 'PUT',
    url: '/user/:userId',
    handler: userController.updateUser,
  },
  // getDetailFood: {
  //   method: 'GET',
  //   url: '/food/detailfood/:id',
  //   handler: foodController.getDetailFood,
  // },
  login: {
    method: 'POST',
    url: '/login',
    handler: userController.login,
  },
  signUp: {
    method: 'POST',
    url: '/signup',
    handler: userController.signUp,
  },
  getAllUser: {
    method: 'GET',
    url: '/user',
    handler: userController.getAllUser,
  },
  removeAllUser: {
    method: 'DELETE',
    url: '/removealluser',
    handler: userController.removeAllUser,
  },
  getPosting: {
    method: 'GET',
    url: '/posting',
    handler: postingController.getAllPosting,
  },
  getDetailPosting: {
    method: 'GET',
    url: '/posting/detailposting/:postingId',
    handler: postingController.getDetailPosting,
  },
  getUserPosting: {
    method: 'GET',
    url: '/posting/:userId',
    handler: postingController.getUserPosting,
  },
  addPosting: {
    method: 'POST',
    url: '/posting',
    handler: postingController.addPosting,
  },
  removePosting: {
    method: 'DELETE',
    url: '/posting',
    handler: postingController.removePosting,
  },
  addComment: {
    method: 'POST',
    url: '/comment',
    handler: commentController.addComment,
  },
};

export const renderRoutes = Object.values(routes);
