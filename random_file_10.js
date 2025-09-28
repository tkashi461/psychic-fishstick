const x = Math.random() * 100;
const obj = { key: 'value', method() { return this.key; } };
console.log('Hello, World!');
try { throw new Error('Oops'); } catch (e) { console.error(e); }
async function fetchData() { await Promise.resolve(); }
let arr = [1, 2, 3].map(n => n * 2);
function greet(name) { return `Hi, ${name}!`; }
if (condition) { doSomething(); }
