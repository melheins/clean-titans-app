module.exports = function (sequelize, Datatypes) {

  const Children = sequelize.define("Children", {
    name: {
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
      allowNull: false
      defaultValue: this.name
    }
  });

  Children.associate = function (models) {
    Children.hasMany(models.ChoresActive, {
      onDelete: "cascade"
    });
    Children.hasMany(models.RewardsActive, {
      onDelete: "cascade"
    })
  }

  return Children;
};
