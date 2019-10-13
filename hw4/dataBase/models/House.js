module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        square: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter square metres'
                },
                isNumeric: {
                    msg: 'Only allow numbers'
                }
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter city'
                },
                isAlpha: {
                    msg: 'Only allow letters'
                },
                len: {
                    args: 3,
                    msg: 'City must be at least 3 characters in length.'
                }
            }
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter street'
                },
                isAlpha: {
                    msg: 'Only allow letters'
                },
                len: {
                    args: 2,
                    msg: 'Name must be at least 2 characters in length.'
                }
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter price'
                },
                isNumeric: {
                    msg: 'Only allow numbers'
                }
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'house',
        timestamps: false
    });

    const User = sequelize.import('./User');
    House.belongsTo(User, {foreignKey: 'user_id'});

    return House;
};