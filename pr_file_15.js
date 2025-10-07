const obj = { key: 'value', method() { return this.key; } };
async function fetchData() { await Promise.resolve(); }
function greet(name) { return `Hi, ${name}!`; }
const x = Math.random() * 100;
console.log('Hello, World!');
let arr = [1, 2, 3].map(n => n * 2);
for (let i = 0; i < 5; i++) { console.log(i); }
try { throw new Error('Oops'); } catch (e) { console.error(e); }
