import {helloWorld, add} from '../js/main.js';
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

    QUnit.test('add should return the sum of two numbers', function(assert) {
        const num1 = 2;
        const num2 = 3;
        const expected = 5;
        const result = add(num1, num2);
        assert.equal(result, expected, 'add(2, 3) should return 5');
    });

    QUnit.test('add should return the sum of negative numbers', function(assert) {
        const num1 = -2;
        const num2 = -3;
        const expected = -5;
        const result = add(num1, num2);
        assert.equal(result, expected, 'add(-2, -3) should return -5');
    });

    QUnit.test('add should return the sum of a positive and a negative number', function(assert) {
        const num1 = 2;
        const num2 = -3;
        const expected = -1;
        const result = add(num1, num2);
        assert.equal(result, expected, 'add(2, -3) should return -1');
    });

    QUnit.test('add should throw an error if inputs are not numbers', function(assert) {
        assert.throws(() => add('a', 3), /You must provide two numbers to add/, 'add("a", 3) should throw an error');
        assert.throws(() => add(2, 'b'), /You must provide two numbers to add/, 'add(2, "b") should throw an error');
    });

    QUnit.test('add should throw an error if inputs are missing', function(assert) {
        assert.throws(() => add(2), /You must provide two numbers to add/, 'add(2) should throw an error');
        assert.throws(() => add(), /You must provide two numbers to add/, 'add() should throw an error');
    });
});
