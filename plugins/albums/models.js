'use strict';

const Joi = require('joi');

module.exports = {
  'create': {
    'validate': {
      'payload': {
        'title': Joi.string().min(3).max(50).required(),
        'artist': Joi.string().min(3).max(50).required(),
        'notes': Joi.string().max(1000)
      }
    },
    'response': {
      'schema': {
        'id': Joi.string().guid(),
        'title': Joi.string().min(3).max(50),
        'artist': Joi.string().min(3).max(50),
        'notes': Joi.string().max(1000)
      }
    }
  },
  
  'find': {
    'validate': {},
    'response': {
      'schema': Joi.object({
        'albums': Joi.array().items(
          Joi.object().keys({
            'id': Joi.string().guid(),
            'title': Joi.string().min(3).max(50),
            'artist': Joi.string().min(3).max(50),
            'notes': Joi.string().max(1000)
        }))
      })
    }
  },

  'findOne': {
    'validate': {
      'params': {
        'id': Joi.string().min(3).max(36).required()
      }
    },
    'response': {
      'schema': {
        'id': Joi.string().guid(),
        'title': Joi.string().min(3).max(50),
        'artist': Joi.string().min(3).max(50),
        'notes': Joi.string().max(1000)
      }
    }
  }
};
