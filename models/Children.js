module.exports = function (sequelize, Datatypes) {

  const Children = sequelize.define("children", {
    first_name: {
      type: Datatypes.STRING,
      allowNull: false,
    }
    points: {
      type: Datatypes.INTEGER,
      defaultValue: 0
    }
    avatar: {
      type: Datatypes.INTEGER,
      allowNull: true
    }
    nickname: {
      type: Datatypes.STRING,
      allowNull: true
    }
  });

  Children.associate = function (models) {
    Children.belongsTo(models.Parents)
    Children.hasMany(models.ChoresActive, {
      onDelete: "cascade"
    });
    Children.hasMany(models.RewardsActive, {
      onDelete: "cascade"
    })
  }

  return Children;
};
