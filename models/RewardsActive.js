module.exports = function (sequelize, DataTypes) {
  const RewardsActive = sequelize.define("active_awards", {
    reward_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reward_points_required: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reward_category:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    reward_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "I"
    }
  });

  /*RewardsActive.associate = function (models) {
    RewardsActive.belongsTo(models.Children, {
      foreignKey: {
        allowNull: false
      }
    })
  }*/
  return RewardsActive
};
