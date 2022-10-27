const UserModel = require('./User.model')
 module.exports.create =function (req, res){
    const newuser = UserModel(
        {
            name:'umar'
        });
    newuser.save()
        .then((data)=>{
            res.send(data);
        }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Something went wrong while creating new user."
        });
    })
}
module.exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findById(id)
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
