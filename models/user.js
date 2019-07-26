module.exports = function(sequelize, Sequelize) {
	var User = sequelize.define("User", {
		firstname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		username: {
			type: Sequelize.TEXT
		},
		about: {
			type: Sequelize.TEXT
		},
		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		last_login: {
			type: Sequelize.DATE
		},
		status: {
			type: Sequelize.ENUM("active", "inactive"),
			defaultValue: "active"
		}
	});

<<<<<<< HEAD
=======
	User.associate = function(models) {
		User.hasMany(models.Item, {
		  foreignKey: {
			allowNull: false
		  }
		});
	  };

>>>>>>> master
	return User;
};
