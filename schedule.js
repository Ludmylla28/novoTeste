var schedule = require('node-schedule');
var shell = require('shelljs');
var fs = require('file-system');

var lista = [
  '../Projetos/Poupatempo/master/.vscode',
  '../Projetos/Poupatempo/master/componentes',
  '../Projetos/Poupatempo/master/dados',
  '../Projetos/Poupatempo/master/db',
  '../Projetos/Poupatempo/master/dialog',
  '../Projetos/Poupatempo/master/portal',
  '../Projetos/Poupatempo/master/public',
  '../Projetos/Poupatempo/master/security',
  '../Projetos/Poupatempo/master/server',
  '../Projetos/Poupatempo/master/service',
  '../Projetos/Poupatempo/master/social',
  '../Projetos/Poupatempo/master/utilities',
  '../Projetos/Poupatempo/master/validation',
  '../Projetos/Poupatempo/master/watson'];


var env = '../Projetos/Poupatempo/master/.env';
var manifest = '../Projetos/Poupatempo/master/manifest.yml';
var app = '../Projetos/Poupatempo/master/app.js';
var package = '../Projetos/Poupatempo/master/package.json';

var fimEnv = '../Projetos/IBM_Poupatempo/Poupinha/.env';
var fimApp = '../Projetos/IBM_Poupatempo/Poupinha/app.js';
var fimPackage = '../Projetos/IBM_Poupatempo/Poupinha/package.json';
var fimManifest = '../Projetos/IBM_Poupatempo/Poupinha/manifest.yml';
var fim = '../Projetos/IBM_Poupatempo/Poupinha';


LLen = lista.length;

var j = schedule.scheduleJob('51 * * * *', function () {
  for (i = 0; i < LLen; i++) {
    shell.cp('-R', lista[i], fim);
  }

  fs.copyFile(env, fimEnv, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });

  fs.copyFile(app, fimApp, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });

  fs.copyFile(manifest, fimManifest, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });

  fs.copyFile(package, fimPackage, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });

  var trocaPasta = new Promise(function (resolve, reject) {
    resolve(shell.cd('../Projetos/IBM_Poupatempo/Poupinha'));
    reject(code !== 0);
  });
  trocaPasta.then(function (resolve) {
    console.log('Pasta Trocada');
  });
  trocaPasta.then(function (reject) {
    trocaPasta.resolve();
  });

  var gitPull = new Promise(function (resolve, reject) {
    resolve(shell.exec('git pull'));
    reject(code !== 0);
  });
  gitPull.then(function (resolve) {
    console.log('Foi gitPull');
  });
  gitPull.then(function (reject) {
    gitPull.resolve(promise);
  });

  var gitAdd = new Promise(function (resolve, reject) {
    resolve(shell.exec('git add .'));
    reject(code !== 0);
  });
  gitAdd.then(function (resolve) {
    console.log('Foi gitAdd');
  });
  gitAdd.then(function (reject) {
    gitAdd.resolve(promise);
  });

  var gitCommit = new Promise(function (resolve, reject) {
    resolve(shell.exec('git commit -am "Atualização 14-08"'));
    reject(code !== 0);
  });
  gitCommit.then(function (resolve) {
    console.log('Foi gitCommit');
  });
  gitCommit.then(function (reject) {
    gitCommit.resolve(promise);
  });

  var gitPush = new Promise(function (resolve, reject) {
    resolve(shell.exec('git push'));
    reject(code !== 0);
  });
  gitPush.then(function (resolve) {
    console.log('Foi gitPush');
  });
  gitPush.then(function (reject) {
    gitPush.resolve(promise);
  });
});

module.exports = j; 