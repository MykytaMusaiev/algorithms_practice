const successCallback = (result) => {
    console.log("Успешно завершено с результатом " + result);
}
const failureCallback = (error) => {
    console.log("Завершено с ошибкой " + error);
}
const meh = () => {
    return new Promise((resolve, reject) => {
        console.log('Вошли в промис');
        (Math.random() > .5) //в половине случаев
        ? resolve('Sucess')
        : reject('Failure')
    })
}

const promise = meh();
promise.then(successCallback, failureCallback);