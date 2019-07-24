module.exports = function(sequelize, DataTypes) {
    var item = sequelize.define("item", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    item.associate = function(models) {
      // We're saying that a item should belong to an Author
      // A item can't be created without an Author due to the foreign key constraint
      item.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return item;
  };
  