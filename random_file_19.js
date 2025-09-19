const x = Math.random() * 100;
try { throw new Error('Oops'); } catch (e) { console.error(e); }
for (let i = 0; i < 5; i++) { console.log(i); }
function greet(name) { return `Hi, ${name}!`; }
let arr = [1, 2, 3].map(n => n * 2);
