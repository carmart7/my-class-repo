// 1) Where is carNoise stored?
// global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // when the goFast execution context is created the value is assigned to speed
  
  // 5) Where is makeNoise stored?
  // local execution context
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // the function makeNoise is called and executes with the passed carNoise and locally stored speed value
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// calls goFast and places it in the call stack which creates a new function execution context
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
