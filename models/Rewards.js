module.exports = function (sequelize, DataTypes) {
  const Rewards = sequelize.define("rewards", {
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
    }
  })
  /*Rewards.associate = function (models) {
    Rewards.hasMany(models.RewardsActive, {
      onDelete: "cascade"
    })
  }*/
  return Rewards
};
