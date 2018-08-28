var shell = require('shelljs');

var troca = {};

troca.trocarPastaInit = function () {
    return new Promise((resolve, reject) => {
        shell.cd('../Projetos/IBM_Poupatempo/Poupinha');
        resolve('Sucessfull Pasta Trocada');
    }).catch(error => {
        reject('Error Pasta Trocada');
    })
}
module.exports = troca;