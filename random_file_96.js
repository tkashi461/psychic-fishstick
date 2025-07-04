const obj = { key: 'value', method() { return this.key; } };
let arr = [1, 2, 3].map(n => n * 2);
class MyClass { constructor() { this.value = 42; } }
const x = Math.random() * 100;
function greet(name) { return `Hi, ${name}!`; }
try { throw new Error('Oops'); } catch (e) { console.error(e); }
async function fetchData() { await Promise.resolve(); }
if (condition) { doSomething(); }
