module.exports = function (sequelize, Datatypes) {

  const Parents = sequelize.define("Parent", {
    name: {
      type: Datatypes.STRING,
      allowNull: false
    }
  });

  Parents.associate = function (models) {
    Parents.hasMany(models.Children, {
      onDelete: "cascade"
    })
  }

  return Parent;
};
