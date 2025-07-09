console.log('Hello, World!');
try { throw new Error('Oops'); } catch (e) { console.error(e); }
class MyClass { constructor() { this.value = 42; } }
const obj = { key: 'value', method() { return this.key; } };
function greet(name) { return `Hi, ${name}!`; }
let arr = [1, 2, 3].map(n => n * 2);
const x = Math.random() * 100;
for (let i = 0; i < 5; i++) { console.log(i); }
if (condition) { doSomething(); }
async function fetchData() { await Promise.resolve(); }
