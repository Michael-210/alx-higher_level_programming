#!/usr/bin/node

const value = parseInt(process.argv[2]);
if (value && typeof (value) === 'number') {
  console.log('My number: ' + value);
} else {
  console.log('Not a number');
}
