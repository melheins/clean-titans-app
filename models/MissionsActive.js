module.exports = function (sequelize, Datatypes) {
  const MissionsActive = sequelize.define("MissionsActive", {
    status: {
      type: Datatypes.STRING,
      allowNull: false,
      default: "i"
    }

  })
  return MissionsActive
};
