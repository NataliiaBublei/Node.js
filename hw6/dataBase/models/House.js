module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please, enter id whose house it is.'
                }
            }
        },
        square: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please, enter square metres'
                },
                isNumeric: {
                    msg: 'Only allow numbers'
                },
                min: {
                    args: [0],
                    msg: 'Only allow values >= 0'
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
                    args: [3, 40],
                    msg: 'City must be from 3 to 40 symbols'
                }
            }
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please, enter street'
                },
                isAlpha: {
                    msg: 'Only allow letters'
                },
                len: {
                    args: [2, 40],
                    msg: 'Street must be from 2 to 40 symbols'
                }
            }
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please, enter price'
                },
                isNumeric: {
                    msg: 'Only allow numbers'
                },
                min: {
                    args: [0],
                    msg: 'Only allow values >= 0'
                }
            }
        }
    }, {
        tableName: 'house',
        timestamps: false
    });

    const User = sequelize.import('./User');
    House.belongsTo(User, {foreignKey: 'user_id'});

    return House;
};