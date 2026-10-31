const { discountPct } = require('./discounts');

function quote(qty, unitCents) {
  const grossCents = qty * unitCents;
  const discountCents = Math.round(grossCents * discountPct(qty) / 100);
  return { grossCents, discountCents, totalCents: grossCents - discountCents };
}

function formatUsd(cents) {
  return '$' + (cents / 100).toFixed(2);
}

module.exports = { quote, formatUsd };
