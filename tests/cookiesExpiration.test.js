const getDateInMiliseconds = require('./../index').getDateInMiliseconds;
const cookiesExpiration = require('./../index').cookiesExpiration;

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30;
var year = day * 365;

test('default (1x) of second, minute, hour, day, month, year', () => {
  expect(getDateInMiliseconds({s: 1})).toBe(second);
  expect(getDateInMiliseconds({m: 1})).toBe(minute);
  expect(getDateInMiliseconds({h: 1})).toBe(hour);
  expect(getDateInMiliseconds({d: 1})).toBe(day);
  expect(getDateInMiliseconds({mth: 1})).toBe(month);
  expect(getDateInMiliseconds({y: 1})).toBe(year);
});

test('multiplying (3x) of second, minute, hour, day, month, year', () => {
  expect(getDateInMiliseconds({s: 3})).toBe(second * 3);
  expect(getDateInMiliseconds({m: 3})).toBe(minute * 3);
  expect(getDateInMiliseconds({h: 3})).toBe(hour * 3);
  expect(getDateInMiliseconds({d: 3})).toBe(day * 3);
  expect(getDateInMiliseconds({mth: 3})).toBe(month * 3);
  expect(getDateInMiliseconds({y: 3})).toBe(year * 3);
});

test('combining hour and day', () => {
  expect(getDateInMiliseconds({h: 3, d: 1})).toBe((hour * 3) + (day * 1));
});

test('negative value return 0', () => {
  expect(getDateInMiliseconds({h: -3})).toBe(0);
  expect(getDateInMiliseconds({h: -3, d: -1})).toBe(0);
});

test('returning a date', () => {
  expect(cookiesExpiration({h: 3})).toBeInstanceOf(Date);
});
