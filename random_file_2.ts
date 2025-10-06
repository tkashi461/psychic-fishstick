type Status = 'active' | 'inactive';
function greet(name: string): string { return `Hi, ${name}!`; }
let arr: number[] = [1, 2, 3].map(n => n * 2);
async function fetchData(): Promise<void> { await Promise.resolve(); }
for (let i: number = 0; i < 5; i++) { console.log(i); }
class MyClass { value: number = 42; constructor() {} }
const x: number = Math.random() * 100;
console.log('Hello, TypeScript!');
interface User { name: string; age: number; }
