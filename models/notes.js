'use strict';
module.exports = (sequelize, DataTypes) => {
  var notes = sequelize.define('notes', {
    noteid: DataTypes.BIGINT,
    notetitle: DataTypes.STRING,
    notecontent: DataTypes.STRING
  }, {});
  notes.associate = function(models) {
    // associations can be defined here
  };
  return notes;
};