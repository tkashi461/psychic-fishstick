let arr = [1, 2, 3].map(n => n * 2);
try { throw new Error('Oops'); } catch (e) { console.error(e); }
async function fetchData() { await Promise.resolve(); }
function greet(name) { return `Hi, ${name}!`; }
for (let i = 0; i < 5; i++) { console.log(i); }
class MyClass { constructor() { this.value = 42; } }
if (condition) { doSomething(); }
const x = Math.random() * 100;
const obj = { key: 'value', method() { return this.key; } };
