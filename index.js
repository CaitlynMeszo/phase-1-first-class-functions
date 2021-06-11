//receivesAFunction(callback) and calls it
function receivesAFunction (callback) {
    callback()
}

//returnsNamedFunction()
function returnsANamedFunction() {
    return function named() {}
  }

//returnsAnAnonymousFunction()
function returnsAnAnonymousFunction() {
    return function() {

    }
}