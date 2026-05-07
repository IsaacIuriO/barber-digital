const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/dbconfig');

class Usuario extends Model{}

// Instância (o Service tem isso dentro dele)
Usuario.init(
{
    email:
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {isEmail:true}
    },
    
    password:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    username:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'Users',
    tableName: 'users'
});

module.exports = Usuario;
