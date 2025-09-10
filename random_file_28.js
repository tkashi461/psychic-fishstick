const obj = { key: 'value', method() { return this.key; } };
console.log('Hello, World!');
try { throw new Error('Oops'); } catch (e) { console.error(e); }
const x = Math.random() * 100;
let arr = [1, 2, 3].map(n => n * 2);
