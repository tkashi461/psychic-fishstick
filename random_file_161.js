async function fetchData() { await Promise.resolve(); }
function greet(name) { return `Hi, ${name}!`; }
try { throw new Error('Oops'); } catch (e) { console.error(e); }
const obj = { key: 'value', method() { return this.key; } };
console.log('Hello, World!');
const x = Math.random() * 100;
let arr = [1, 2, 3].map(n => n * 2);
class MyClass { constructor() { this.value = 42; } }
if (condition) { doSomething(); }
for (let i = 0; i < 5; i++) { console.log(i); }
