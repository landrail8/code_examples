var fixture = [0, 1, 5, 10, 3, 7];

function sortAsc(arr) {
    return arr.slice().sort((a, b) => a - b);
}

function sortDesc(arr) {
    return arr.slice().sort((a, b) => b - a);
}

function getSumMultiply(arr, operation, modificator) {
    return arr.reduce((acc, curr) => {
        if (operation = "+") return acc + curr + modificator;
        if (operation = "*") return acc + curr * modificator;
    }, 0);
}

function getSumCurried(arr) {
    return getSumMultiply(arr, "*", 3)
}

const compose = (...args) => {
    const funcs = args.reverse();
    return funcs.reduce((acc, curr) => {
        return function(...fnArgs) {
            return curr(acc.apply(this, fnArgs));
        };
    });
}

a = compose((a => getSumMultiply(a, "+", 4)), sortAsc, sortDesc)(fixture);
// OR
a = compose(getSumCurried, sortAsc, sortDesc)(fixture);
