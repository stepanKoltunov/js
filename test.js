// function multiply() {
//     let x = 1;
//     for( i = 0; i < arguments.length; i++){
//         if( arguments[i] != null){
//             x *= arguments[i]
//         }else if( arguments[i] == undefined ){
//             console.log('0')
//         }
//     }
//     return x;
// }

// console.log(multiply())
// function reverseString(str) {
//     let x = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         x += str[i];
//     }
//     return x;
// }

// console.log(reverseString('test'))

// function getCodeStringFromText(str) {
//     let x = '';
//     for(let i = 0; i < str.length; i++){
//         x += str[i].charCodeAt() + ' ';
//     }
//     return x;
// };

// console.log(getCodeStringFromText("hello penis"));


// function guessTheNumber(num) {
//     if( typeof num != 'number'){
//         console.error('Error penis');
//     }else if( num < 0 || num > 10 ){
//         console.log('0-10');
//     }else if( num > 0 && num < 10){
//         let x = Math.round(Math.random() * 10 + 1);
//      if( x === num ){
//         console.log('u win');
//     } else{
//         console.log(`u numder ${num} the random number ${x}`)
//     }
//     }
// }

// guessTheNumber(4);

// function getArray(num) {
//     let x = [];
//     for( let i = 1; i < num + 1; i++){
//          x.push(i); 
//     }
//     return x;
// }
// console.log(getArray(10));


// function doubleArray(arr) {
//     let x = arr;
//     let y = x.concat(arr)
//     return y;
// }

// console.log(doubleArray([1,2,3]));


// function changeCollection() {
//     let x = [];
//     for(i = 0; i < arguments.length; i++){
//         arguments[i].shift();
//         x.push(arguments[i]);
//     }
//     return x;
// }

// console.log(changeCollection([1,2,3], [2, 3, 4]))

// const users = [
//     {
//       "_id": "5e36b779dc76fe3db02adc32",
//       "balance": "$1,955.65",
//       "picture": "http://placehold.it/32x32",
//       "age": 33,
//       "name": "Berg Zimmerman",
//       "gender": "male"
//     },
//     {
//       "_id": "5e36b779d117774176f90e0b",
//       "balance": "$3,776.14",
//       "picture": "http://placehold.it/32x32",
//       "age": 37,
//       "name": "Deann Winters",
//       "gender": "female"
//     },
//     {
//       "_id": "5e36b779daf6e455ec54cf45",
//       "balance": "$3,424.84",
//       "picture": "http://placehold.it/32x32",
//       "age": 36,
//       "name": "Kari Waters",
//       "gender": "female"
//     }
//   ]


//   function filterUsers(arr, key, value) {
//       let x = [];
//     if( !arr || !key || !value){
//         return console.error('Error')
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i][key] === value){
//             x.push(arr[i])
//         }
//     }
//     return x;
//   }

//   console.log(filterUsers(users, "age", 36))


// function firstFunc(arr, fn) {
//     let res = "New value: "
//     for(let i = 0; i < arr.length; i++){
//         res += fn(arr[i]);
//     }
//     return res;
// }

// function handler1(el) {
//     return el[0].toUpperCase() + el.slice(1);
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// function handler2(el) {
//     return el * 10 + ', ';
// }

// console.log(firstFunc([10, 20, 30], handler2) )

// function handler3(el) {
//     return `${el.name} is ${el.age} `;
// }

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// function handler4(el) {
//     return el.split('').reverse().join("");
// }

// console.log(firstFunc(['abs', '123'], handler4));


// function every(arr, fn) {
//     if (Array.isArray(arr) && typeof fn === 'function') {
//     } else {
//         return console.error('ERORR');
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i])) {

//         } else {
//             return console.log('false');
//         }
//     }
// }
// function callback(e) {
//     return e > 5;
// }
// every([6, 2, 6, 6], callback);

// const rectangle = {
//     width: 4,
//     height: 5,
//     getSquare: function () {
//         console.log(this.width * this.height);
//     }
// };

// rectangle.getSquare();

// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice: function () {
//         console.log(this.price);
//     },
//     getPriceWithDiscount: function() {
//         console.log(this.price * (100 - parseInt(this.discount)) / 100)
//     }
//     };

//     price.getPrice(); // 10

//     price.getPriceWithDiscount(); // 8.5

// function upByOne () {
//    console.log(this.height + 1);
// }

// let test = {
//     height: 12,
//     upByOne
// }


// const numerator = {

//     value: 1,

//     double: function () {
//         this.value * 2
//         console.log(this.value * 2)
//         return this;
//     },

//     plusOne: function () {
//         this.value + 1
//         console.log(this.value + 1)
//         return this;
//     },

//     minusOne: function () {
//         this.value - 1
//         console.log(this.value - 1)
//         return this;
//     },
// }

// numerator.double().plusOne().plusOne().minusOne();

// numerator.value // 3

// function priSco () {    
//     return this.price * this.score;
// }

// const products = {
//     price: 12,
//     score: 10,
//     priSco
// }

// const compon = {
//     score: 11,
//     price: 200,
//     priSco
// }


// console.log(products.priSco())
// console.log(compon.priSco())
// let sizes = {
//     width: 5,
//     height: 10
//     }

// getSquare = function () {
//     return this.width * this.height
// };
// sizes.getSquare = getSquare;
// console.log(sizes.getSquare())

// let element = {
//     height: 25,
//     getHeight: function () { 
//         return this.height; 
//     }
// };



// let getElementHeight = element.getHeight.bind(element);

// console.log(getElementHeight()); // undefined


// function sum() {
//     const params = Array.prototype.slice.call(arguments);  
//     if (!params.length) return 0;  
//     return params.reduce((prev, next) => { return prev + next; })
// };  

//     console.log(sum(1, 2, 3, 4)); // 10
//     console.log(sum()); // 0


// const convertToObject = (num) => {

//         const obj = {

//         value: num,

//         isOdd: Boolean(num % 2)

//     }

//     return obj;
// }
// console.log(convertToObject(4))



// const arr = [12, 4, 50, 1, 0, 18, 40];
// const newArr = arr.some((i) => i === 0);
// console.log(newArr);

// const arr = [1,2,3,5,8,9,10];

// const newArr = arr.map( (num) => {
//     return {
//         digit: num,
//         odd: Boolean(num % 2)
//     }
// })
// console.log(newArr)

// const arr = ['yes', 'hello', 'no', 'easycode', 'what'];

// const newArr = arr.every( (i) => i.length > 1);

// console.log(newArr)


// const arr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},

// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},

// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

// arr.sort((prev, next) => prev.index - next.index)

// const newArr = arr.reduce((word, obj) =>{
//     word += obj['char'];
//     return word;
// }, '')

// console.log(newArr);

// const arr = [[14, 45], [1], ['a', 'c', 'd']];

// arr.sort((prev, next) => 
//     prev.length - next.length
// );

// console.log(arr);

// const arr = [
//     {cpu: 'intel', info: {cores:2, сache: 3}},

//     {cpu: 'intel', info: {cores:4, сache: 4}},

//     {cpu: 'amd', info: {cores:1, сache: 1}},

//     {cpu: 'intel', info: {cores:3, сache: 2}},

//     {cpu: 'amd', info: {cores:4, сache: 2}}
//     ]


// arr.sort((prev, next) => 
//     prev.info.cores - next.info.cores
// )
// console.log(arr);

// let products = [
//     {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},

//     {title: 'prod3', price: 15}, {title: 'prod4', price: 25},

//     {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},

//     {title: 'prod7', price: 19}, {title: 'prod8', price: 63}  
// ];

//     function filterCollections(obj){
//         if(!Array.isArray(obj)) return console.error('Erorr')
//         const newCollection = obj.filter(prod => prod.price >= 15 && prod.price <= 30).sort((prev, next) => prev.price - next.price)
//         return newCollection;

//     }
//     console.log(filterCollections(products))


// function minus (num = 0){
//     return function minusOne(x = 0){
//         return x = num - x;
//     }
// }
// console.log(minus()())


// function multiplyMaker(num){
//     let y = num;
//     return function (x) {
//         return y *= x;
//     }
// }

// const multiply = multiplyMaker(2);
// console.log(multiply(2))
// console.log(multiply(1))
// console.log(multiply(3))
// console.log(multiply(10))

// const module = (function () {
//     let str = '';

//      function setStr(val = ''){
//         str = String(val);
//         return str;
//     }

//     function getStr(){
//         return str;
//     }

//     function getLength(){   
//         return str.length;;
//     }
//     function getRemove () {
//         return str.split('').reverse().join('');
//     }
//     return {
//         setStr,
//         getStr,
//         getLength,
//         getRemove
//     };
// })();

// console.log(module.setStr('Hello'));
// console.log(module.getStr());
// console.log(module.getLength());
// console.log(module.getRemove());


// const module = (function () {
//     let num = 0;

//      function setStr(val){
//         num = val;
//         return num;
//     }

//     function getStr(val){
//         num += val
//         return num;
//     }

//     function getLength(val){
//         num *= val;   
//         return num;
//     }
//     function getRemove (val) {
//         num **= val;
//         return num;
//     }
//     return {
//         setStr,
//         getStr,
//         getLength,
//         getRemove
//     };
// })();

// console.log(module.setStr(114));
// console.log(module.getStr(122));
// console.log(module.getLength(2));
// console.log(module.getRemove(3));


// function func(num1, ...others){
//  return{
//     'first': num1,
//     'other': others
//  }
// }

// console.log(func('a', 'b', 'c','d'));

// const organisation = {
//     name: 'Google',
//     info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
// };

// function getInfo({ name, info: { partners: [comp1, comp2,,] } }) {
//     if(typeof name !== 'string'){
//         name = 'unk'
//     }
//  return `name: ${name}  partners: ${[comp1, comp2]}`
// };

// console.log(getInfo(organisation));

// let user = {
//     "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
//     "isActive": false,
//     "balance": "$2,474.46",
//     "age": 30,
//     "eyeColor": "blue",
//     "name": "Tameka Maxwell",
//     "gender": "female",
//     "company": "ENOMEN",
//     "email": "tamekamaxwell@enomen.com",
//     "phone": "+1 (902) 557-3898",
//     "tags": [
//       "aliquip",
//       "anim",
//       "exercitation",
//       "non",
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Barber Hicks"
//       },
//       {
//         "id": 1,
//         "name": "Santana Cruz"
//       },
//       {
//         "id": 2,
//         "name": "Leola Cabrera"
//       }
//     ],
//   };

// const {tags, friends}  = user;
// const tagsFriends = [...tags, ...friends]
// console.log(tagsFriends);

// var foo = {
//     baz: 1,
//     bar: function () { return .baz }
//   };
//  const arrr =  (function(){
//     return typeof arguments[0]();
//   })(foo.bar);
//   console.log(arrr)

// const hd = document.querySelector('div')
// console.log(hd);


// const text = document.getElementsByTagName('p');
// console.log(text)

// const int = document.querySelector('div')

// function intTest (test){
//     return{
//         type: test.childNodes,
//         name: test.nodeName,
//         scoreChild: test.childNodes.length
//     }
// }
// console.log(intTest(int))
// 
// links.forEach((links) => {
//     let links = document.querySelector('a');
//     
// });
// const links = document.querySelector('ul').innerText;
// let arr = [];
// links.forEach(element => {
//     element.push(links)
// });
// console.log(links)

// const par = document.querySelector('ul').nextElementSibling;
// par.setAttribute('id', 'link')
// console.log(par)

// const par = document.querySelectorAll('li');
// par.forEach((links) => {
//     links.classList.add('custom-link')
// })
// console.log(par)

// const btn = document.getElementById('btn-msg');

// function alertF (e) {
//     alert(btn.dataset.text)
// };

// btn.addEventListener('click', alertF);


// const btn = document.querySelector('.rer');


// btn.addEventListener('click',
//  () => {
//      let element = document.querySelector('ul');
//      element.classList.toggle('red');
// });
// console.log(btn)

// const btnN = document.getElementById('btn-generate');
// const list = document.querySelector('ul');

// let i = 3;
// function addLi(e) {
//     const li = document.createElement('li');
//     li.textContent = `item ${i++}`
//     list.appendChild(li)
// }

// btnN.addEventListener('click', addLi);
// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');

// function getUsers(cb) {
//     const arrUsers = new XMLHttpRequest();
//     arrUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');

//     arrUsers.addEventListener('load', () => {
//         const response = JSON.parse(arrUsers.responseText);
//         cb(response);
//     })

//     arrUsers.send()
// }

// btn.addEventListener('click', () => {
//     getUsers(response => {
//         const fragment = document.createDocumentFragment();
//         response.forEach(users => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             const cardName = document.createElement('button');
//             cardName.classList.add('btn', 'btn-primary');
//             cardName.textContent = users.name;
//             card.appendChild(cardName);
//             fragment.appendChild(card)
//         });
//         container.appendChild(fragment));
//     });
// })
// const btn = document.querySelector('.btn');
// let div = document.querySelector('.main');

// function onClick() {
//     div.classList.toggle('active');
//     div.classList.toggle('main');
// }
// btn.addEventListener('click', onClick)
// class Gerpl {
//     furniture;
//     yarn;
//     constructor(f, y){
//         this.furniture = f;
//         this.yarn = y;
//     }
//     calc(){
//         return this.furniture * this.yarn;
//     }
//     }

// const rect = new Gerpl(5, 6);
// const rect1 = new Gerpl(54, 6);
// const rect2 = new Gerpl(51, 6);
// console.log(rect2.calc())

// function multiplicationNumbers(num1, num2){
//     return Math.round(num1 * num2)
// }
// console.log(multiplicationNumbers(1.5, 1.5)) 

// const checkCowCount = (num) => {
//     Math.round(num)
//     let name = "корова"
//     return num > 9 ? `${num} коров` : `${num} корова`
// }
// console.log(checkCowCount(20))


// function objToArr(obj) {
//     return Object.entries(obj)
// }
// console.log(objToArr({ key1: 1, key2: 2 }))

    // function getObjWithoutKeys(obj, ...keys) {
    //     for(let num in obj){
    //         num == keys.find(name => name === num) ? delete obj[num] : num
    //     }
    //     return obj
    // }
    // console.log(getObjWithoutKeys({ a: 1, b: 2, c: 3 }, "a", "c"))

    //     function getNames(obj) {
    //         let names = Object.values(obj).filter(name => name[0] === "R" ||  name[0] === "r").reduce((prevName, name) => ` ${prevName}, ${name}`)
    //         return  `Names in object: ${names}`
    // }
    // console.log(getNames({ rita: "Rita", anna: "Anna", c: "Roma", d: "radion" }))


    // let users = {
    //     name: "Stepa",
    //     id: 11,
    //     num: 921,
    // }

    // Object.defineProperties(users, {
    //     enumerable: false
    // })

    // console.log(users)

//    let users = {
//     id: 11,
//     name: "stepan", 
//     num: 921
//    }

//    function setUsersProperties(obj){
//         for(let user in obj){
//             Object.defineProperty(obj,
//                 user, {enumerable: false})
//             }
//             return obj
//    }


//     console.log(setUsersProperties(users))



//    let users = {
//     id: 11,
//     name: "stepan", 
//     num: 921
//    }

//    function setUsersProperties(obj){
//         for(let user in obj){
//             Object.defineProperty(obj,
//                 user, {writable: false})
//             }
//             obj.picture = "../asd/img.svg"
//             let descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
//             return descriptor
//    }


//     console.log(setUsersProperties(users))

// function blackjack(num1, num2) {
//     const largestWinNum = 21
//     if( num1 > largestWinNum && num2 > largestWinNum || num1 < 0 || num2 < 0)
//      return console.error('Number error')
//     if(num1 === largestWinNum && num2 === largestWinNum) return 0
//     if(num1 <= largestWinNum && num2 <= largestWinNum) {
//         return num1 > num2 ? num1 : num2 
//     } 
//     if(num1 >= largestWinNum || num2 >= largestWinNum) return num1 > num2 ? num2 : num1 
// }

// console.log(blackjack(-11, 19))

// function hasNumberThree(arrNum) {
//     for(let num in arrNum){
//         let numIndex = arrNum.indexOf(3)
//         console.log(numIndex)
//         if(arrNum[numIndex + 1] === 3) {
//             return true
//              }
//         return false
//     }
// }

// console.log(hasNumberThree([1, 3, 3]))

// const animals = [
//     {
//         name: 'bark',
//         age: 5,
//     },
//     {
//         name: 'foo',
//         age: 4,
//     },
//     {
//         name: 'bird',
//         age: 1,
//     }
// ];

// function getAverageAge(arr) {
//     let numberOfAnimals = animals.length
//     return Math.round(arr.reduce((prevNum, num) => {return prevNum + num.age}, 0) / numberOfAnimals)
// }

// console.log(getAverageAge(animals))

// function makeTripleCopy(arr) {
//     return arr.map(item => item + item + item)
// }

// console.log(makeTripleCopy(["24", "a", ""]))


// function pigIt(str){
//     let newStr = ""
//     for(let i; i < str.length; i++){
//         if(str[i].includes(" ")){
//             newStr = str[i - 1].concat("y")
//         }
//         newStr = +str[i]
//     }
//     return newStr
// }

// console.log(pigIt('Pig latin is cool'))

// function getStrFtomArr (arr){
//     return arr.join(' ')
// }
// console.log(getStrFtomArr(['hello', 'world', 'this', 'is', 'great']))

// function booleanToString(b){
//     return `${b}`
// }
// console.log(booleanToString(true))

// function descendingOrder(num){
//     return +(num + '').split('').sort(function(a,b){ return b - a }).join('');
//   }
// console.log(descendingOrder(42145))

// const response =  fetch('https://jsonplaceholder.typicode.com/photos', {
//     method: 'POST',
//     body: file
//   })

// document.querySelector('button').addEventListener("click", function(){
//     let file = document.getElementById('file').files[0]
//     if(file.type == 'image/png' || file.type == "image/jpeg") {
//         response
//         return console.log(file.name.slice(0, -4))
//     }
//     if(file.type == 'audio/mpeg') {
//         response
//         return console.log(file.size)
//     } else {
//         return console.error("type error")
//     }
// })

function countMult(num) {
    if(num > 0 && typeof num == "number"){
        let result = 1
        for(let i = 0; i < num; i++){
            setTimeout(() => console.log(result *= i + 1),i * 1000)
        }
    } else {
        return console.error('Num error')
    }
   
}
    
console.log(countMult(11))