// Bulk deals. Buy at least `min` units, get `pct` percent off the whole order.
const TIERS = [{ min: 14, pct: 8 }, { min: 91, pct: 11 }, { min: 188, pct: 28 }];

function discountPct(qty) {
  let best = 0;
  for (const tier of TIERS) {
    if (qty > tier.min) best = tier.pct;
  }
  return best;
}

module.exports = { TIERS, discountPct };
