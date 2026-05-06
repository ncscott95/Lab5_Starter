// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// tests for isPhoneNumber

test('checks phone number space no parenthesis', () => {
  expect(isPhoneNumber("123 456-7890")).toBe(true);
});

test('checks phone number parenthesis no space', () => {
  expect(isPhoneNumber("(800)888-8888")).toBe(true);
});

test('checks phone number no delimiters', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('checks phone number spaces no hyphen', () => {
  expect(isPhoneNumber("123 456 7890")).toBe(false);
});

// tests for isEmail

test('checks email numbers in username', () => {
  expect(isEmail("n4scott@ucsd.edu")).toBe(true);
});

test('checks email shortest possible values', () => {
  expect(isEmail("1@a.aa")).toBe(true);
});

test('checks email numbers in domain', () => {
  expect(isEmail("asdf@1.gov")).toBe(false);
});

test('checks email multiple periods in domain', () => {
  expect(isEmail("n4scott@ieng6.ucsd.edu")).toBe(false);
});

// tests for isStrongPassword

test('checks password alphanumeric with underscore', () => {
  expect(isStrongPassword("a1B2_c3D4")).toBe(true);
});

test('checks password shortest possible', () => {
  expect(isStrongPassword("abcd")).toBe(true);
});

test('checks password starts with number', () => {
  expect(isStrongPassword("1abc")).toBe(false);
});

test('checks password too long', () => {
  expect(isStrongPassword("1234567890abcdef")).toBe(false);
});

// tests for isDate

test('checks date 1 digit day month', () => {
  expect(isDate("5/5/2026")).toBe(true);
});

test('checks date 2 digit day month', () => {
  expect(isDate("05/05/2026")).toBe(true);
});

test('checks date 2 digit year', () => {
  expect(isDate("5/5/26")).toBe(false);
});

test('checks date hyphen delimiters', () => {
  expect(isDate("5-5-2026")).toBe(false);
});

// tests for isHexColor

test('checks hex color 6 digits', () => {
  expect(isHexColor("#50D1A2")).toBe(true);
});

test('checks hex color 3 digits', () => {
  expect(isHexColor("#15c")).toBe(true);
});

test('checks hex color character past F', () => {
  expect(isHexColor("#FFFFFG")).toBe(false);
});

test('checks hex color wrong number digits', () => {
  expect(isHexColor("#15cc")).toBe(false);
});