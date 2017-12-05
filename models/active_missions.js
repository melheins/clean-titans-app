module.exports = function (sequelize, DataTypes) {
    const active_missions = sequelize.define("active_missions", {
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

    active_missions.associate = function (models) {
        active_missions.belongsTo(models.missions, {
            foreignKey: {
                allowNull: false
            }
        });
        active_missions.belongsTo(models.children, {
            foreignKey: {
                allowNull: false
            }
        });
        active_missions.belongsTo(models.parents, {
          foreignKey: {
            allowNull: false
          }
        })

    };
    return active_missions
};
