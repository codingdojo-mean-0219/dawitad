var mongoose = require("mongoose");
var Task = mongoose.model("Task");
var tasks = require("../controller/mytasks");

module.exports = function (app) {

    app.get("/tasks", tasks.tasks );

    app.get("/tasks/:id", tasks.task);

    app.post("/tasks", tasks.create);

    app.put("/tasks/:id", tasks.update);

    app.delete("/tasks/:id", tasks.delete);

};