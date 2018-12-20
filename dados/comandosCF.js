var shell = require('shelljs');

var cf = {};

cf.cfLogin = function () {
    return new Promise((resolve, reject) => {
        shell.exec('cf login -u (email) -p (senha) -o Poupatempo_Chatbot -s Desenvolvimento');
        resolve('Sucessfull cf login');
    }).catch(error => {
        reject('Error cf login');
    })
}

cf.cfPush = function () {
    return new Promise((resolve, reject) => {
        shell.exec('cf push');
        resolve('Sucessfull cf push');
    }).catch(error => {
        reject('Error cf push');
    })
}
module.exports = cf; 