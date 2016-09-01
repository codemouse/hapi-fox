'use strict';

const squel = require('squel');
const uuid = require('node-uuid');

// const mockAlbum = {};
// const mockAlbums = {'albums': []};

module.exports = {
  'create': (request, reply) => {
    const id = uuid.v4();

    const insertQuery = squel.insert()
      .into('albums')
      .set('id', id)
      .set('title', request.payload.title)
      .set('artist', request.payload.artist)
      .set('notes', request.payload.notes)
      .toString();

    const selectQuery = squel.select()
      .from('albums')
      .where(`id = '${id}'`)
      .toString();

    return request.app.db.query(insertQuery, (err, rows) => {
      console.log(err);

      return request.app.db.query(selectQuery, (err, rows) => {
        console.log(err);

        return reply(rows[0]);
      });
    });
  },

  'find': (request, reply) => {
    const selectQuery = squel.select()
      .from('albums')
      .where(`id = '${request.params.id}'`)
      .toString();

    return request.app.db.query(selectQuery, (err, rows) => {
      console.log(err);

      return reply(rows[0]);
    });
  },

  'findAll': (request, reply) => {
    const selectQuery = squel.select()
      .from('albums')
      .toString();

    return request.app.db.query(selectQuery, (err, rows) => {
      console.log(err);

      return reply({'albums': rows});
    });
  }
};

