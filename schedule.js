var schedule = require('node-schedule');
var shell = require('shelljs');
var fs = require('file-system');

var lista = [
  "../Projetos/Poupatempo/master",
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

var fim = '../Projetos/IBM_Poupatempo/Poupinha';

var env = '../Projetos/Poupatempo/master/.env';
var manifest = '../Projetos/Poupatempo/master/manifest.yml';
var app = '../Projetos/Poupatempo/master/app.js';
var package = '../Projetos/Poupatempo/master/package.json';
var fimEnv = '../Projetos/IBM_Poupatempo/Poupinha/.env';
var fimApp = '../Projetos/IBM_Poupatempo/Poupinha/app.js';
var fimPackage = '../Projetos/IBM_Poupatempo/Poupinha/package.json';
var fimManifest = '../Projetos/IBM_Poupatempo/Poupinha/manifest.yml';


LLen = lista.length;

var j = schedule.scheduleJob('43 * * * *', function () {
  for (i = 0; i < LLen; i++) {
    shell.cp('-R', lista[i], fim);
  }console.log('primeira etapa');

  fs.copyFile(env, fimEnv, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });console.log('segunda etapa');

  fs.copyFile(app, fimApp, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });console.log('segunda etapa');

  fs.copyFile(manifest, fimManifest, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });console.log('segunda etapa');

  fs.copyFile(package, fimPackage, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });console.log('segunda etapa');

  shell.cd('../testeschedule')
  if (shell.exec('git add .').code !== 0) {
    shell.echo('Error: Git add failed');
    shell.exit(1);
  } else if (shell.exec('git commit -am "testando 123"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  } else if (shell.exec('git push').code !== 0) {
    shell.echo('Error: Git push failed');
    shell.exit(1);
  }console.log('I finished')
});

module.exports = j; 