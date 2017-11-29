module.exports = function (sequelize, Datatypes) {
  const ChoreList = sequelize.define("ChoreList", {
    status: {
      type: Datatypes.STRING,
      allowNull: false,
      default: "i"
    }
    
  })
};
