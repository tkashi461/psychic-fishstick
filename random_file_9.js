async function fetchData() { await Promise.resolve(); }
const obj = { key: 'value', method() { return this.key; } };
try { throw new Error('Oops'); } catch (e) { console.error(e); }
const x = Math.random() * 100;
function greet(name) { return `Hi, ${name}!`; }
for (let i = 0; i < 5; i++) { console.log(i); }
class MyClass { constructor() { this.value = 42; } }
console.log('Hello, World!');
let arr = [1, 2, 3].map(n => n * 2);
if (condition) { doSomething(); }
