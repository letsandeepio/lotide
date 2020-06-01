const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1]), 1);
assertEqual(head([]), 2);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
