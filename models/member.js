module.exports = function(sequelize, DataTypes) {
    var member = sequelize.define("member", {
      // Giving the member model a name of type STRING
      name: DataTypes.STRING
    });
  
    member.associate = function(models) {
      // Associating member with Posts
      // When an member is deleted, also delete any associated Posts
      member.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return member;
  };
  