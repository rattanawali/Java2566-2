const kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];

const reformattdArray = kvArray.map(({ key, value}) => ({ [key]: value}));

console.log(reformattdArray);
console.log(kvArray);