const Recipient = require('../src/Recipient');
const recipient = new Recipient({}); // Don't need to init with object values for unit tests

test('Should set the proper attribute on the data object', () => {
  const r = new Recipient({});
  r.data.addNumber('test', 123);
  expect(r.attributes.test).toEqual(123);
});

test('Should accept negative value', () => expect(recipient.data.addNumber('test', -1)).toEqual(-1));

test('Should accept 0 as a value', () => expect(recipient.data.addNumber('test', 0)).toEqual(0));

test('Should accept null as a value', () => expect(recipient.data.addNumber('test', null)).toEqual(null));

test('Should accept positive string as a number', () => expect(recipient.data.addNumber('test', '1')).toEqual(1));

test('Should accept negative string as a number', () => expect(recipient.data.addNumber('test', '-1')).toEqual(-1));

test('Should throw when Number() typecast evaluates to NaN', () => {
  try {
    recipient.data.addNumber('test', 'abcd');
  } catch (e) {
    expect(e.message).toEqual('The second parameter is a string that cannot be converted into a number.');
  }
});
