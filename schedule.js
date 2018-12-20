var schedule = require('node-schedule');
var troca = require('./dados/mudancaPasta.js');
var cf = require('./dados/comandosCF.js');

var j = schedule.scheduleJob('31 * * * *', function () {

  troca.trocarPastaInit().then(results => {
    console.log(results);
    return cf.cfLogin();

  }).then(results => {
    console.log(results);
    return cf.cfPush();

  }).then(results => {
    console.log(results);

  }).catch(error => {
    console.log(error);
  });
});

module.exports = j; 