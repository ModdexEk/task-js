
const workers = [
    {"name":"Андрей","salary": 500},
    {"name":"Иван","salary": 700},
    {"name":"Илья","salary": 1300},
    {"name":"Алексей","salary": 1450},
    {"name":"Пётр","salary": 800},
    {"name":"Никита","salary": 1500}
];


const getWorthyWorkers = (workersArr) => {
    const worthyWorkers = [];

    workersArr.forEach(currenWorker => {
        if (currenWorker.salary > 1000) {
            worthyWorkers.push(currenWorker.name)
        }
    })

    return worthyWorkers;
};

console.log(getWorthyWorkers(workers));