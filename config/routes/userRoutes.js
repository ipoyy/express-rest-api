const validate = require('../../api/middleware/validation/validateMiddleware')
const schemas = require('../../api/middleware/validation/validateSchema')

const userRoutes = {

  'POST /register':  {
					    path: 'UserController.register',
					    middlewares: [validate(schemas.createUser)],
					 },

  'POST /assign': {
					path: 'TaskController.register',
					middlewares: [validate(schemas.createTask)],
					},

  'POST /unassign': {
					path: 'TaskController.destroy',
					middlewares: [validate(schemas.unassignTask)],
					},

  'POST /tasks/common': {
					     path: 'UserController.getTasks',
					     middlewares: [validate(schemas.assignTask)],
						},

};

module.exports = userRoutes;
