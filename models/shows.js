// id
// title
// genre
// want to watch
// completed default false
// watching default false
// foreign key pointing to user id, pointing to user id will come in with the route files with the where and includes stuff

module.exports = function(sequelize, DataTypes) {
	var Show = sequelize.define("Show", {
		api_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		genre: {
			type: DataTypes.STRING,
			allowNull: true
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
	});

	Show.associate = function(models) {
		Show.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Show;
};
