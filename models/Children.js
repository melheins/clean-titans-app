module.exports = function (sequelize, Datatypes) {

  const Children = sequelize.define("Children", {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    points: {
      type: Datatypes.INTEGER,
      defaultValue: 0
    },
    avatar: {
      type: Datatypes.INTEGER,
      allowNull: true
    },
    nickname: {
      type: Datatypes.STRING,
      allowNull: true
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
