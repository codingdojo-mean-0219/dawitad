const path = require('path');
const Author = require('../controller/Author_controller');


module.exports = function(app){
    app.get('/authors', Author.getAuthors);
    app.get('/author/:id', Author.getAuthor);
    app.post('/authors', Author.create);
    app.put('/author/:id', Author.update);
    app.delete('/author/:id', Author.delete);

};
