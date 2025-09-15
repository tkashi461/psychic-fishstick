async function fetchData() { await Promise.resolve(); }
try { throw new Error('Oops'); } catch (e) { console.error(e); }
const obj = { key: 'value', method() { return this.key; } };
let arr = [1, 2, 3].map(n => n * 2);
for (let i = 0; i < 5; i++) { console.log(i); }
