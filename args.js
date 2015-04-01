// slicing and summing
// the first two are fixed: 'node', <program-name>
console.log(process.argv.slice(2, process.argv.length).reduce(
    function(a, b) {return Number(a) + Number(b);}
));


