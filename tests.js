'use strict';

const expect = require('chai').expect;
const traverse = require('./traverse.js');
const shouldPass = [
  '*',
  '**',
  '*~',
  '**~',
  '***',
  '***~',
  '*******~',
  '********~~',
  '********~~~',
  '********~~~*',
  '********~~~**',
  '*~*~*~*~*~*~*~',
  '***~*~*~*~*~*~',
  '**~*~~*~~*~~*~~',
  '***~**~*~~**~*~~*~*~*~*'
];

const shouldFail = [
  '*****a',
  '*~$',
  '~',
  '~*',
  '~~',
  '***~~~',
  '*~~~~~',
  '**~~~~',
  '*****~~~',
  '*******~~~~~~~~~~~~~~~~~~~'
];

describe('traverse', () => {
  describe('should traverse', () => {
    shouldPass.forEach((river) => {
      it('can traverse ' + river, () => {
        expect(traverse(river, 0, true)).to.equal(true);
      });
    });
  });

  describe('should not traverse', () => {
    shouldFail.forEach((river) => {
      it('can not traverse ' + river, () => {
        expect(traverse(river, 0, true)).to.equal(false);
      });
    });
  });
});
