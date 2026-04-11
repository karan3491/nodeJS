



console.log("1",[] + []); // as count [].toString result "";
console.log("2",[] + {}); // [object, object]
console.log("3",{} + []);  // [object, object]
console.log("4",true + true); // 2
console.log("5", 1 + '2' + 3);  // 123
console.log("6",'1' - 1); // 0

console.log("7",false + true);  // 1
console.log("8", 0 + false);  //0
console.log("9",false + false); // 0
console.log("10", {} + {}); // [object, object], [object, object]

console.log([] == false); // true
console.log([] === false); // false

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(0.1 + 0.2 === 0.3); // false

console.log([] == ![]);  // true

console.log(typeof null); // object


// closer

function makeCounter() {
  let c = 0;
  return () => ++c;
}
const count = makeCounter();
console.log("closer",count(), count(), count()); // 1,2,3


const obj1 = {
  name: "JS",
  say() {
    console.log(this.name);
  }
};

const fn = obj1.say;
fn();   // undefined lost the this context


const obj = {
  value: 10,
  show: () => {
    console.log(this.value);
  }
};

obj.show();  // arrow function lost the this context output: undefined


console.log(
  typeof NaN,
  Number.isNaN(NaN),
  isNaN('foo')
) /// number , true, truex


Promise.resolve()
  .then(() => { throw new Error('Boom'); })
  .then(() => console.log('never'))
  .catch(e => console.log('caught', e.message))
  .finally(() => console.log('cleanup'));
  // caught Boom, cleanup


/// Promise --->---->

console.log('A'); 
setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => {
    console.log('C');
  });
}, 0);


Promise.resolve().then(() => {
  console.log('D');
  setTimeout(() => {
    console.log('E');
  }, 0);
  return Promise.resolve();
});

// output  A->D->B->C-> E



for(var i=0; i<3; i++){
  setTimeout(()=>{
   console.log(i)
  }, i * 1000)
}
// output: 3 3 3

for(let i=0; i<3; i++){
  setTimeout(()=>{
   console.log(i)
  }, i * 1000)
}

//output: 0 1 2

for(var i=0; i<3; i++){
  ((j)=>{
       setTimeout(()=>{
       console.log(j)
      }, i * 1000)
    }
  )(i)
 
}

//output: 0 1 2 

// hosting

// var
console.log(a); // a is not defined => undefined
var a;  
console.log(a) // undefined
a=9;
console.log(a); // 9

// let
console.log(a); ///ReferenceError: Cannot access 'a' before initialization
let a; // Execution stops here.
console.log(a);  // Execution stops here.
a=9;
console.log(a); // Execution stops here.


// const
console.log(a); ///ReferenceError: Cannot access 'a' before initialization
const a; // Execution stops here.
console.log(a);  // Execution stops here.
a=9;
console.log(a); // Execution stops here.