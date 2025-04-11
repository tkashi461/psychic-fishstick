const obj = { key: 'value', method() { return this.key; } };
class MyClass { constructor() { this.value = 42; } }
for (let i = 0; i < 5; i++) { console.log(i); }
async function fetchData() { await Promise.resolve(); }
if (condition) { doSomething(); }
try { throw new Error('Oops'); } catch (e) { console.error(e); }
function greet(name) { return `Hi, ${name}!`; }
const x = Math.random() * 100;
console.log('Hello, World!');
let arr = [1, 2, 3].map(n => n * 2);
