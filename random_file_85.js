const obj = { key: 'value', method() { return this.key; } };
async function fetchData() { await Promise.resolve(); }
console.log('Hello, World!');
try { throw new Error('Oops'); } catch (e) { console.error(e); }
function greet(name) { return `Hi, ${name}!`; }
let arr = [1, 2, 3].map(n => n * 2);
for (let i = 0; i < 5; i++) { console.log(i); }
const x = Math.random() * 100;
class MyClass { constructor() { this.value = 42; } }
if (condition) { doSomething(); }
