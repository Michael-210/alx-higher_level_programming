#!/usr/bin/node

function factorial (num) {
  if (!num || num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(parseInt(process.argv[2])));