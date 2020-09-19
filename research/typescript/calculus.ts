type constantZero = 0;

const zero: constantZero = 0;

const tru = (t) => (f) => t;
const fls = (t) => (f) => f;
const test = (l: typeof tru | typeof fls) => (m) => (n) => l(m)(n);

const isZero = (nr) => (nr === 0 ? true : false);
const succ = (nr?) => (isZero(nr ?? 0) ? 1 : succ(nr - 1) + 1);
const pred = (nr?) => (isZero(nr ?? 0) ? 0 : nr - 1);

const c0 = (s) => (z) => zero;
const c1 = (s) => (z) => s(z);
const c2 = (s) => (z) => s(s(z));

const cn = (n) => (s) => (z) => s(n(s)(z));

console.log(cn(c0)(succ)(zero));
