// sum.test.js

import { sum } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('adds 4 + 4 to equal 10', () => {
    expect(4 + 4).not.toBe(10);
});
