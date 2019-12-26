/* eslint-disable linebreak-style */
import Validator from '../app';

const validator = new Validator();

test('Success', () => {
  expect(validator.validateUsername('Evgen123e')).toBe(true);
});

test('Start from number', () => {
  expect(validator.validateUsername('666Diabolo')).toBe(false);
});

test('Start from -', () => {
  expect(validator.validateUsername('-Zero')).toBe(false);
});

test('Start from _', () => {
  expect(validator.validateUsername('_Zero')).toBe(false);
});

test('End on number', () => {
  expect(validator.validateUsername('Evgen123')).toBe(false);
});

test('End on -', () => {
  expect(validator.validateUsername('Evgen123-')).toBe(false);
});

test('End on _', () => {
  expect(validator.validateUsername('Evgen123_')).toBe(false);
});

test('More then 3 numbers', () => {
  expect(validator.validateUsername('Evgen1234e')).toBe(false);
});
