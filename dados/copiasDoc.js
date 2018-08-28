var shell = require('shelljs');
var fs = require('file-system');

var lista = [
    '../../Poupatempo/master/.vscode',
    '../../Poupatempo/master/componentes',
    '../../Poupatempo/master/dados',
    '../../Poupatempo/master/db',
    '../../Poupatempo/master/dialog',
    '../../Poupatempo/master/portal',
    '../../Poupatempo/master/public',
    '../../Poupatempo/master/security',
    '../../Poupatempo/master/server',
    '../../Poupatempo/master/service',
    '../../Poupatempo/master/social',
    '../../Poupatempo/master/utilities',
    '../../Poupatempo/master/validation',
    '../../Poupatempo/master/watson'];


var env = '../../Poupatempo/master/.env';
var manifest = '../../Poupatempo/master/manifest.yml';
var app = '../../Poupatempo/master/app.js';
var package = '../../Poupatempo/master/package.json';

var fimEnv = '../../IBM_Poupatempo/Poupinha/.env';
var fimApp = '../../IBM_Poupatempo/Poupinha/app.js';
var fimPackage = '../../IBM_Poupatempo/Poupinha/package.json';
var fimManifest = '../../IBM_Poupatempo/Poupinha/manifest.yml';
var fim = '../../IBM_Poupatempo/Poupinha';

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