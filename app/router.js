'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user',controller.user.index);
  router.post('/user',controller.user.addUser);
  router.put('/user',controller.user.updateUser);
  router.delete('/user/:user_id',controller.user.delUser);
};
