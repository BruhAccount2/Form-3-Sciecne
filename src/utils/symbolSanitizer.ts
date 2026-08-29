/**
 * Pristine Malaysian KSSM Math & Science Unicode symbol formatter & content purity validator.
 * Ensures zero broken encoding artifacts and crystal clear scientific notation.
 */

export const UNICODE_SYMBOLS = {
  sqrt: '√',
  squared: '²',
  cubed: '³',
  power4: '⁴',
  powerN: 'ⁿ',
  powerM: 'ᵐ',
  lessOrEqual: '≤',
  greaterOrEqual: '≥',
  notEqual: '≠',
  approx: '≈',
  plusMinus: '±',
  degree: '°',
  pi: 'π',
  delta: 'Δ',
  theta: 'θ',
  ohm: 'Ω',
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  multiply: '×',
  divide: '÷',
  infinity: '∞',
  arrowRight: '→',
  arrowBi: '↔',
  micro: 'µ'
};

/**
 * Sanitize text to eliminate encoding artifacts and normalize scientific / mathematical symbols.
 */
export function sanitizeContent(input: string | undefined | null): string {
  if (!input) return '';

  let text = input;

  // Fix common UTF-8 double encoding / mojibake artifacts
  text = text.replace(/Â°/g, '°');
  text = text.replace(/âˆš/g, '√');
  text = text.replace(/â‰¤/g, '≤');
  text = text.replace(/â‰¥/g, '≥');
  text = text.replace(/â‰ /g, '≠');
  text = text.replace(/Ã—/g, '×');
  text = text.replace(/â†’/g, '→');
  text = text.replace(/âˆ†/g, 'Δ');
  text = text.replace(/â‰ˆ/g, '≈');
  text = text.replace(/â€œ|â€ /g, '"');
  text = text.replace(/â€˜|â€™/g, "'");
  text = text.replace(/â€“|â€”/g, '—');
  text = text.replace(/\uFFFD/g, '');
  text = text.replace(/@&#[0-9a-zA-Z#$]*/g, '');

  return text;
}

/**
 * Audit scanner for suspicious or malformed content
 */
export function validateContentPurity(text: string): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];
  if (!text) return { isValid: true, issues: [] };

  if (/@&#|\$#|\*#/.test(text)) {
    issues.push('Contains random garbage symbols (@&# / $#)');
  }
  if (/Ã[—\x80-\xFF]|Â[\x80-\xFF]|â[\x80-\xFF]/.test(text)) {
    issues.push('Contains mojibake encoding artifacts');
  }
  if (/\bundefined\b|\bnull\b|\bNaN\b/i.test(text) && !text.includes('null hypothesis') && !text.includes('null vector')) {
    issues.push('Contains raw JavaScript keyword string (undefined / null / NaN)');
  }
  if (/lorem ipsum|placeholder|todo:\s*add/i.test(text)) {
    issues.push('Contains placeholder or unfinished filler text');
  }

  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * Format math expression strings for elegant readability in text
 */
export function formatMathExpression(expr: string): string {
  if (!expr) return '';
  let res = sanitizeContent(expr);
  // Replace sqrt(...) with √( ...)
  res = res.replace(/sqrt\(([^)]+)\)/g, '√($1)');
  res = res.replace(/sqrt(\d+)/g, '√$1');
  // Replace ^2 with ² and ^3 with ³
  res = res.replace(/\^2/g, '²');
  res = res.replace(/\^3/g, '³');
  res = res.replace(/\^n/g, 'ⁿ');
  res = res.replace(/\^m/g, 'ᵐ');
  return res;
}
