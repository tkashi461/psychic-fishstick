interface User { name: string; age: number; }
async function fetchData(): Promise<void> { await Promise.resolve(); }
console.log('Hello, TypeScript!');
if (condition: boolean) { doSomething(); }
for (let i: number = 0; i < 5; i++) { console.log(i); }
const x: number = Math.random() * 100;
let arr: number[] = [1, 2, 3].map(n => n * 2);
class MyClass { value: number = 42; constructor() {} }
type Status = 'active' | 'inactive';
function greet(name: string): string { return `Hi, ${name}!`; }
