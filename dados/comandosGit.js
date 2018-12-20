var shell = require('shelljs');

var git = {};

git.gitPull = function () {
    return new Promise((resolve, reject) => {
        shell.exec('git pull');
        resolve('Sucessfull gitPull');
    }).catch(error => {
        reject('Error Pasta gitPull');
    })
}

git.gitAdd = function () {
    return new Promise((resolve, reject) => {
        shell.exec('git add .');
        resolve('Sucessfull gitAdd');
    }).catch(error => {
        reject('Error Pasta gitAdd');
    })
}

git.gitCommit = function () {
    return new Promise((resolve, reject) => {
        shell.exec('git commit -am "Atualização 19-09"');
        resolve('Sucessfull gitCommit');
    }).catch(error => {
        reject('Error Pasta gitCommit');
    })
}


git.gitPush = function () {
    return new Promise((resolve, reject) => {
        shell.exec('git push');
        resolve('Sucessfull gitPush');
    }).catch(error => {
        reject('Error Pasta gitPush');
    })
}

module.exports = git; 