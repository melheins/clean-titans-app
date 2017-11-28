module.exports = function (sequelize, Datatypes) {
  const ChoreList = sequelize.define("ChoreList", {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    }
    points: {
      type: Datatypes.INTEGER,
      allowNull: false,
    }
    description: {
      type: Datatypes.TEXT,
      allowNull:
    }
  })
};
