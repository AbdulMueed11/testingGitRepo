function testingLet () {
    let name = 'Rizwan';
    let fullName;
    console.log('name : ', name);
    if (true) {
        let name = 'Salman';
        console.log('name: ', name);
        let lastName = 'Jamal';
        console.log('lastName :', lastName);
        console.log('name :', name);
        // Normal String Concatenation
        console.log('fullName :', name + ' ' + lastName);
        // String Literals
        console.log('fullName :', `${name} ${lastName}`);
    }
    console.log('name: ', name);
}

function testingConstArray () {
    const names = ['mueed', 'moiz', 'talha'];
    names.push('sylvester', 'abrar');
    console.log('names :', names)
}

function testingStringLiterals() {
    let text = "This is my first paragraph \n This is second paragraph";
    console.log('text using Normal String Concatenation:', text);
    let text2 = `This is my first paragraph
    This is second paragraph`
    console.log('text2 using String Literals:', text2);
}


// let fullName = function (firstName, lastName) {
//     let fullName = `${firstName} ${lastName}`;
//     console.log('fullName :', fullName);
// }
let fullName = (firstName, lastName) => {
    let fullName = `${firstName} ${lastName}`;
    console.log('fullName :', fullName);
}

let showNames = (names) => {
    console.log('names :',  names);
    names.forEach((name) => {
        console.log('name :', name);
    })
};


// testingLet();
// testingArray();
// testingStringLiterals();
// fullName('Rizwan', 'Jamal');
showNames(['Mueed', 'Talha', 'Abrar'])