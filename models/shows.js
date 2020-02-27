
module.exports = (sequelize, DataTypes) => {
	const Shows = sequelize.define("Shows", {
		api_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		poster_path: {
			type: DataTypes.STRING
		},
		want_to_watch: {
			type: DataTypes.BOOLEAN
		},
		watching: {
			type: DataTypes.BOOLEAN
		},
		completed: {
			type: DataTypes.BOOLEAN
		}
	}, {
		freezeTableName: true
	});

	Shows.associate = models => {
		Shows.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Shows;
};
