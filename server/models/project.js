'use strict';
const app = require("../../server/server")
module.exports = function (Project) {
  /**
   * Start a timer for the project
   * @param {Function(Error, date)} callback
   */

  Project.prototype.startTimer = async function (callback) {
    // let { Timer } = app.models
    let timer = await this.timers.create({ project: this.id, start: new Date().toDateString() })
    return await Project.findOne({ where: { id: this.id }, include: 'timers' })
  };

};
