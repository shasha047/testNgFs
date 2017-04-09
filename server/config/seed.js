/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Game from '../api/game/game.model';
import User from '../api/user/user.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Game.find({}).remove()
      .then(() => {
        Game.create({
    name : 'Halo 5',
    platform : 'Xbox One',
    genre: 'Shooter'
  },{
    name : 'Fallout 4',
    platform : 'PlayStation 4',
    genre: 'Role-Playing'
  },{
    name : 'Super Smash Bros.',
    platform : 'Wii U',
    genre: 'Fighting'
  },{
    name : 'Pokemon X',
    platform : '3DS',
    genre: 'Role-Playing'
  },{
    name : 'Halo 4',
    platform : 'Xbox 360',
    genre: 'Shooter'
  });
      })
    .then(() => console.log('finished populating things'))
    .catch(err => console.log('error populating things', err));

    User.find({}).remove()
      .then(() => {
        User.create({
          provider: 'local',
          name: 'Test User',
          email: 'test@example.com',
          password: 'test'
        }, {
          provider: 'local',
          role: 'admin',
          name: 'Admin',
          email: 'admin@example.com',
          password: 'admin'
        })
        .then(() => console.log('finished populating users'))
        .catch(err => console.log('error populating users', err));
      });
  }
}
