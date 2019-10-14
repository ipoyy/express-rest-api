const Joi = require('@hapi/joi');

const schemas = { 
  createUser: Joi.object().keys({ 
    Users: Joi.array().required().items(Joi.string().required())
  }),

  createTask: Joi.object().keys({ 
  	user: Joi.string().required(),
    tasks: Joi.array().required().items(Joi.string().required())
  }) ,

  assignTask: Joi.object().keys({ 
    Users: Joi.array().required().items(Joi.string().required())
  }),

  unassignTask: Joi.object().keys({ 
    user: Joi.string().required(),
    tasks: Joi.array().required().items(Joi.string().required())
  }) ,
  
  // define all the other schemas below 
}; 
module.exports = schemas;