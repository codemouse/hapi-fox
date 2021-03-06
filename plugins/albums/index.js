'use strict';

const controller = require("./controller");
const models = require("./models");

exports.register = (server, options, next) => {
  server.route({
    'method': 'POST',
    'path': '/albums',
    'handler': controller.create,
    'config':{
      'validate': models.create.validate,
      'response': models.create.response,
      'tags': ['api'],
      'plugins': {
        'hapiAuthorization': {
          'roles': [
            server.role.ADMIN.name
          ]
        }
      }
    }
  });

  server.route({
    'method': 'GET',
    'path': '/albums',
    'handler': controller.findAll,
    'config':{
      'response': models.find.response,
      'tags': ['api'],
      'plugins': {
        'hapiAuthorization': {
          'roles': [
            server.role.ADMIN.name,
            server.role.USER.name
          ]
        }
      }
    }
  });

  server.route({
    'method': 'GET',
    'path': '/albums/{id}',
    'handler': controller.find,
    'config':{
      'validate': models.findOne.validate,
      'response': models.findOne.response,
      'tags': ['api'],
      'plugins': {
        'hapiAuthorization': {
          'roles': [
            server.role.ADMIN.name,
            server.role.USER.name
          ]
        }
      }
    }
  });

  next();
};

exports.register.attributes = {
  'pkg': {'name': 'albums'}
};
