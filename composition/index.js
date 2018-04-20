var fixture = [0, 1, 5, 10, 3, 7];

function sortAsc(arr) {
    return arr.slice().sort((a, b) => a - b);
}

function sortDesc(arr) {
    return arr.slice().sort((a, b) => b - a);
}

function getSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const compose = (...args) => {
    const funcs = args.reverse();
    return funcs.reduce((acc, curr) => {
        return function(...fnArgs) {
            return curr(acc.apply(this, fnArgs));
        };
    });
}

a = compose(getSumCurried, sortAsc, sortDesc)(fixture);
