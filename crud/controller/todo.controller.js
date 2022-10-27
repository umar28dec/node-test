const todoModel = require('../model/todoSchema');
module.exports.getData = (req, res)=>{
    todoModel.find((err, data)=>{
        if(err){
            console.log(err)
        }
        if (!data)
            res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
    })
}

module.exports.save = (req, res)=>{
    const newtodo = new todoModel({
        name :req.body.name
    })
    newtodo.save((err, data)=>{
        if(err){
            console.log(err)
        }
        res.send("data saved");
    })
}

module.exports.findOne = (req, res) => {
    const id = req.params.id;
    todoModel.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};
