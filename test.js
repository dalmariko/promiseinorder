// Как заставить выполниться все функции по порядку, который обозначин в Promise.all
//setTimeout() Здесь эмулирует обращение к апи которое возвращает промис.

let ctn = 0;
let container = document.querySelector('.container');
let handle;


const start = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            container.insertAdjacentHTML('beforeend', template('Start'));
            resolve();
        }, 2000);
    });

};

const first = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            container.insertAdjacentHTML('beforeend', template('first'));
            resolve();
        }, 1500);
    });
};

const second = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            container.insertAdjacentHTML('beforeend', template('second'));
            resolve();
        }, 1000);
    });
};

const third = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            container.insertAdjacentHTML('beforeend', template('third'));
            resolve();
        }, 500);
    });
};

const ct = () => {
    return new Promise(resolve => {
        ctn += 1;
        container.insertAdjacentHTML('beforeend', template(ctn));
        container.insertAdjacentHTML('beforeend', template('</br>'));
        resolve();
    });
};


const seqRunner = deeds => {
    return deeds.reduce((p, deed)=>{
        return p.then(() => {
            return deed();
        });
    }, Promise.resolve());
};


const template = (message) => {
    return `<div>${message}</div>`
};

function go() {
    seqRunner([start,first,second,third,ct]).then(()=>{
        handle = setTimeout(go, 1000);
    });
}


handle = setTimeout(go, 10);


