const assert = require('node:assert');
const { quote, formatUsd } = require('../src/quote');

assert.strictEqual(quote(1, 100).totalCents, 100);
assert.strictEqual(formatUsd(1234), '$12.34');
// A customer ordered exactly 91 units, which should be on the 11% deal.
const gross = 91 * 834;
assert.strictEqual(quote(91, 834).discountCents, Math.round(gross * 11 / 100));
console.log('ok');
