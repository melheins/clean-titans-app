module.exports = function (sequelize, DataTypes) {
  const MissionsActive = sequelize.define("active_missions", {
    mission_status: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "i"
    },
    mission_status_date: {
     type: DataTypes.DATEONLY,
     allowNull: false,
     defaultValue: DataTypes.NOW
    }

  });
  /*MissionsActive.associate = function (models) {
    MissionsActive.belongsTo(models.Missions, {
      foreignKey: {
        allowNull: false
      }
    }),
    MissionsActive.belongsTo(models.Children, {
      foreignKey: {
        allowNull: false
      }
    });

  };*/
  return MissionsActive
};
