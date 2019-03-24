

const controller = require('../controller/book');
module.exports = function(app){
   
        app.get('/authors', controller.authors)
        app.post('/author', controller.NewAuthor)
        app.get('/author/:id', controller.author)
        app.put('/update/:id/', controller.editAuthor)
        app.delete('/delete/:id/', controller.delete)
    
}