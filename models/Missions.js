module.exports = function (sequelize, DataTypes) {

  const Missions = sequelize.define("missions", {
    mission_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mission_point_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mission_decription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mission_video_url: {
      type: DataTypes.STRING,
    }
  })
  return Missions
}
