/*============= Global scope =================*/
var globalVar = "I am global";

function exampleFunction() {
  console.log(globalVar);
}
exampleFunction();
console.log(globalVar);

/*================ Function scope ============*/
function examFunc() {
  var localVar = "I am local";
  console.log(localVar);
}
examFunc();
/*console.log(localVar); */ // localVar is not defined

/*================ Block scope =================*/
if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar);
}
/*console.log(blockVar); */ // blockVar is not defined

/*==================== scoping with var ==================*/
function exFun() {
  var functionScopeVar = "I am function scoped";
  if (true) {
    var alsoFunctionScoped = "I am also function scoped";
    console.log(alsoFunctionScoped);
  }
  console.log(alsoFunctionScoped);
}
exFun();
/*console.log(functionScopeVar);*/ // functionScopeVar is not defined

/*==================== scoping with let and const ==================*/
function exeFun() {
  if (true) {
    let blockScopedlet = "I am block scoped with let";
    let blockScopedconst = "I am block scoped with const";
    console.log(blockScopedlet);
    console.log(blockScopedconst);
  }
  console.log(blockScopedlet); // blockScopedlet is not defined
  console.log(blockScopedconst); // blockScopedconst is not defined
}

/*===================== lexical scope ===================*/
function outerFunction() {
  var outerVar = "I am from outer scope";

  function innerFunction() {
    console.log(outerVar);
  }
  innerFunction();
}

outerFunction();
