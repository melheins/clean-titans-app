module.exports = function (sequelize, DataTypes) {

  var Parents = sequelize.define("Parents", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER,
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
