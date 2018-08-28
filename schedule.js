var schedule = require('node-schedule');
var transferArquivos = require('./dados/copiasDoc.js');
var troca = require('./dados/mudancaPasta.js');
var git = require('./dados/comandosGit.js');

var j = schedule.scheduleJob('35 02 * * *', function () {

  troca.trocarPastaInit().then(results => {
    console.log(results);
    return git.gitPull();

  }).then(results => {
    console.log(results);
    return transferArquivos();

  }).then(results => {
    console.log(results);
    return git.gitAdd();

  }).then(results => {
    console.log(results);
    return git.gitCommit();

  }).then(results => {
    console.log(results);
    return git.gitPush();

  }).then(results => {
    console.log(results);

  }).catch(error => {
    console.log(error);
  });
});

module.exports = j; 