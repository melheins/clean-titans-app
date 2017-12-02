module.exports = function (sequelize, DataTypes) {

  const Children = sequelize.define("Children", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    avatar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Children.associate = function (models) {
    Children.belongsTo(models.Parents, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Children;
};
