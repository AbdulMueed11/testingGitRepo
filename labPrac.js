function testLet ()
{
    let name = 'Mueed';
    console.log('name: ', name);
}

// testLet();

let doubleTest = (a) => {
var a = [4, 5, 6];
var b = a.map(function(num){
        return num * 2;
});

console.log(b);

};

doubleTest([4, 5, 6]);