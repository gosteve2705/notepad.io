var express = require('express'),
 router = express.Router(),
 home = require('../controllers/home'),
 about = require('../controllers/about')
 note = require('../controllers/note');

module.exports = function(app) {
 router.get('/', home.index);
 router.get('/notes/:note_id', note.index);
 router.get('/notes/listAll', note.listAll);
 router.get('/about', about.index);
 router.post('/notes/create', note.create);
 router.post('/notes/:note_id/edit', note.edit);
 router.post('/notes/:note_id/delete', note.delete);
 router.post('/notes/:note_id/createCategory', note.createCategory);
 router.post('/notes/:note_id/addNoteTocategory', note.addNoteTocategory);
 app.use(router);
};