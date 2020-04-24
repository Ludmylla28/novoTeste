var shell = require('shelljs');
var fs = require('file-system');

var lista = [
    '../../../master/.vscode',
    '../../../master/componentes',
    '../../../master/dados',
    '../../../master/db',
    '../../../master/dialog',
    '../../../master/portal',
    '../../../master/public',
    '../../../master/security',
    '../../../master/server',
    '../../../master/service',
    '../../../master/social',
    '../../../master/utilities',
    '../../../master/validation',
    '../../../master/watson',]


var env = '../../../master/.env';
var manifest = '../../../master/manifest.yml';
var app = '../../../master/app.js';
var package = '../../../master/package.json';

var fimEnv = '../../../Poupinha/.env';
var fimApp = '../../../Poupinha/app.js';
var fimPackage = '../../../Poupinha/package.json';
var fimManifest = '../../../Poupinha/manifest.yml';
var fim = '../../../Poupinha';

LLen = lista.length;

function transferArquivos() {
    return new Promise((resolve, reject) => {
        const copyFilePromise = [];

        for (i = 0; i < LLen; i++) {

            copyFilePromise.push(new Promise((resolve, reject) => {
                shell.cp('-R', lista[i], fim);
                resolve('documentos coppiados');
            }).catch(error => {
                reject('Erro na copia' + lista[i]);
            })
            );
        }
        Promise.all(copyFilePromise).then(results => {
            console.log(results);
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
            resolve('Copia feita');

        });
    }).catch(error => {
        reject('Erro na copia de arquivos');
    })
}

module.exports = transferArquivos; 
