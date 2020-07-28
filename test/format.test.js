var assert = require('assert');
import * as format from '../js/format.js';

describe('Format', function () {
  describe('#formatText()', function () {
    it('should return n/a for null text', function () {
      assert.equal(format.formatText(null), 'n/a');
    });
    it('should return n/a for undefined text', function () {
      assert.equal(format.formatText(undefined), 'n/a');
    });
    it('should return text for not-null text', function () {
      assert.equal(format.formatText('Lorem Ipsum'), 'Lorem Ipsum');
    });
  });
  describe('#formatDate()', function () {
    it('should return n/a for null date', function () {
      assert.equal(format.formatDate(null), 'n/a');
    });
    it('should return n/a for undefined date', function () {
      assert.equal(format.formatDate(undefined), 'n/a');
    });
    it('should return 29.01.2019 for 2019-01-29T03:10:46Z', function () {
      assert.equal(format.formatDate('2019-01-29T03:10:46Z'), '29.01.2019');
    });
    it('should return 05.05.2020 for 2020-05-05', function () {
      assert.equal(format.formatDate('2020-05-05'), '05.05.2020');
    });
    it('should return 01.01.2019 for 2019-01', function () {
      assert.equal(format.formatDate('2019-01'), '01.01.2019');
    });
    it('should return Invalid Date for empty string', function () {
      assert.equal(format.formatDate(''), 'Invalid Date');
    });
  });
});
