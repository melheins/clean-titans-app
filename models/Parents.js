module.exports = function (sequelize, Datatypes) {

  const Parents = sequelize.define("parents", {
    first_name: {
      type: Datatypes.STRING,
      allowNull: false
    }
    last_name: {
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
