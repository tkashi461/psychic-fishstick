async function fetchData() { await Promise.resolve(); }
console.log('Hello, World!');
try { throw new Error('Oops'); } catch (e) { console.error(e); }
const obj = { key: 'value', method() { return this.key; } };
class MyClass { constructor() { this.value = 42; } }
function greet(name) { return `Hi, ${name}!`; }
