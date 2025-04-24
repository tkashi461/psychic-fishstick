let arr = [1, 2, 3].map(n => n * 2);
const obj = { key: 'value', method() { return this.key; } };
try { throw new Error('Oops'); } catch (e) { console.error(e); }
async function fetchData() { await Promise.resolve(); }
class MyClass { constructor() { this.value = 42; } }
