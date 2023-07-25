//export the model from sequelize orm to do the crud method
const model = require("../models");

module.exports = class userController {
  async createData(req, res) {
    const { firstName, lastName, phoneNumber, address } = req.body;
    const data = await model.listcall.create({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
    });
    return res.redirect("/");
  }
  async readData(req, res) {
    const data = await model.listcall.findAll();
    res.render("index", {
      data: data,
    });
  }
  async edit(req, res) {
    try {
      const { id } = req.params;
      const dataUser = await model.listcall.findOne({
        where: {
          id: id,
        },
      });
      res.render("update", {
        data: dataUser,
      });
    } catch (error) {
      console.error(error);
    }
  }
  async updateData(req, res) {
    try {
      const { id } = req.params;
      const { firstName, lastName, address, phoneNumber } = req.body;
      const dataUpdate = await model.listcall.update(
        {
          firstName,
          lastName,
          address,
          phoneNumber,
        },
        {
          where: { id },
        }
      );
      res.redirect("/")
    } catch (error) {
      console.error(error);
    }
  }
  async deleteData(req, res) {
    const { id } = req.params;
    const deleteData = await model.listcall.destroy({
      where: {
        id: id,
      },
    });

    return res.redirect("/");
  }
};
