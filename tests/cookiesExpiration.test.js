const expiration = require('./../index').expiration;

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30;
var year = day * 365;

test('returning a date', () => {
  expect(expiration({y: 3})).toBeInstanceOf(Date);
});

test('negative value return date now', () => {
  expect(expiration({h: -3}).getTime()).toEqual(new Date().getTime());
});

test('returning a future date', () => {
  var dateNow = new Date().getTime();
  var futureDate = expiration({h: 3}).getTime();

  expect(futureDate).toBeGreaterThan(dateNow);
});

test('new date should be 1 hour late', () => {
  var dateNow = new Date();
  var oneHour = new Date(dateNow.getTime() + hour).getTime();
  var oneHourFromLib = expiration({h: 1}).getTime();

  expect(oneHour).toEqual(oneHourFromLib);
});

test('new date should be 2 hours late', () => {
  var dateNow = new Date();
  var oneHour = new Date(dateNow.getTime() + hour * 2).getTime();
  var oneHourFromLib = expiration({h: 2}).getTime();

  expect(oneHour).toEqual(oneHourFromLib);
});

test('new date should be 1:30 hour late', () => {
  var dateNow = new Date();
  var oneHour = new Date(dateNow.getTime() + hour + minute * 30).getTime();
  var oneHourFromLib = expiration({h: 1, m: 30}).getTime();

  expect(oneHour).toEqual(oneHourFromLib);
});
