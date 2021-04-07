const heroRouter = require('express').Router();
const imageRouter = require('./image');
const powerRouter = require('./powers');
const HeroController = require('../controller/hero.controller');
const { uploadImages } = require('../middlewares/file.upload');

heroRouter
  .route('/')
  .get(HeroController.getHeroes)
  .post(uploadImages, HeroController.createHero);
  
heroRouter
  .route('/:id')
  .get(HeroController.getHeroById)
  .put(HeroController.updateHeroById)
  .delete(HeroController.deleteHeroById);

heroRouter.use('/:heroId/images/', imageRouter);
heroRouter.use('/:heroId/powers/', powerRouter);

module.exports = heroRouter;
