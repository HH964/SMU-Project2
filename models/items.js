module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
      catagory: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        len: [1]
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });
  
    Item.associate = function(models) {
      // We're saying that a Post should belong to an user
      // A Post can't be created without an user due to the foreign key constraint
      Item.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Item;
  };