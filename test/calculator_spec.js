const expect = require('chai').expect;
const calculator = require('../calculator.js');

describe('calculator function', function(){
    it('checks that the calculator function is defined', function() {
        expect(calculator).to.be.ok;
    });
    it('has an add, subtract, and multiply method', function() {
        expect(calculator.add).to.be.a('function');
        expect(calculator.subtract).to.be.a('function');
        expect(calculator.multiply).to.be.a('function');
    })
});

describe('checking if the methods work', function() {
    it('checks that the add method works', function() {
        expect(calculator.add(1,2)).to.eql(3);
    });
    it('checks if the subtract method works', function() {
        expect(calculator.subtract(5,1)).to.eql(4);
        expect(calculator.subtract(1,2)).to.eql(-1);
    });
    it('checks if the multiply method works', function() {
        expect(calculator.multiply(3,5)).to.eql(15);
    })
});