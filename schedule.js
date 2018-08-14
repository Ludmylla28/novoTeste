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

var j = schedule.scheduleJob('18 * * * *', function () {
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

  shell.cd('../Projetos/IBM_Poupatempo/Poupinha')
  if (shell.exec('git add .').code !== 0) {
    shell.echo('Error: Git add failed');
    shell.exit(1);
  } else if (shell.exec('git commit -am "Atualização 06-08"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  } else if (shell.exec('git push').code !== 0) {
    shell.echo('Error: Git push failed');
    shell.exit(1);
  }console.log('terminei')
});

module.exports = j; 