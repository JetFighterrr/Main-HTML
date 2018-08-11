const {sum} = require('./script.js');

test('Should summ works', ()=>{
  expect(sum(2, 3)).toBe(5);
  expect(sum(20, 30)).toBe(50);
  expect(sum(-2, 3)).toBe(1);
//  expect(sum(0, 3)).toBe(5);
});