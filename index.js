

function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multipliervalue) {
  return function(value){ return value * multipliervalue}
  
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multipliervalue, value) {
  return multipliervalue * value
}

// .bind sets the default first argument, in this case 
// the multiplier value of the multiplier() function
var doublerWithBind = multiplier.bind(null, 2)
// doublerWithBind(5) = 10
var triplerWithBind = multiplier.bind(null, 3)
// doublerWithBind(5) = 15