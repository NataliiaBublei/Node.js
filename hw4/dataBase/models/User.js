module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your name'
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Wrong format email'
                },
                notNull: {
                    msg: 'Please enter your email'
                },
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your password'
                },
                len: {
                    args: 6,
                    msg: 'Password must be at least 6 characters in length.'
                }
            }
        }
    }, {
        tableName: 'user',
        timestamps: false
    });

    return User;
};