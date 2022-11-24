const express = require('express');
const storeData = require('../controllers/data');
const myRouter = express.Router();
myRouter.route('/fetchData').get(storeData.dataController);
module.exports = myRouter;