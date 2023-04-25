'use strict';

import {Model} from 'sequelize';

interface UserAttributes {
  awsCofnitoId: string;
  name: string;
  role: string,
  email: string;
}


//const {
//  Model
//} = require('sequelize');

export enum UserRoles {
  ADMIN = 'ADMIN',
  SUPERVISOR = 'SUPERVISOR',
  AGENT = 'AGENT',
  CUSTOMER = 'CUSTOMER'
}

module.exports = (sequelize:any, DataTypes:any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    awsCofnitoId!: string;
    name!: string;
    role!: string;
    email!: string;
    
    static associate(models:any) {
      // define association here
    }
  }
  User.init({
    awsCofnitoId:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM,
      defaultValue: UserRoles.CUSTOMER,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }
  , {
    sequelize,
    modelName: 'User',
  });
  return User;
};