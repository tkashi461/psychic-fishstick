const x = Math.random() * 100;
const obj = { key: 'value', method() { return this.key; } };
try { throw new Error('Oops'); } catch (e) { console.error(e); }
let arr = [1, 2, 3].map(n => n * 2);
class MyClass { constructor() { this.value = 42; } }
async function fetchData() { await Promise.resolve(); }
function greet(name) { return `Hi, ${name}!`; }
console.log('Hello, World!');
for (let i = 0; i < 5; i++) { console.log(i); }
if (condition) { doSomething(); }
