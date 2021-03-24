// const msg = 'Hello World';
// console.log(msg);

function b() {
  const hello = 'Hello';
  return hello;
}

function a() {
  const state = b();
  console.log(state);
}

a();
