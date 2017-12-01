module.exports = function (sequelize, Datatypes) {

  const Parents = sequelize.define("Parents", {
    first_name: {
      type: Datatypes.STRING,
      allowNull: false
    },
    last_name: {
      type: Datatypes.STRING,
      allowNull: false
    }
    uid: {
      type: DataTypes.Integer,
      allowNull: false
    }
  });

  Parents.associate = function (models) {
    Parents.hasMany(models.Children, {
      onDelete: "cascade"
    })
  }

  return Parents;
};
