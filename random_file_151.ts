interface User { name: string; age: number; }
const x: number = Math.random() * 100;
console.log('Hello, TypeScript!');
let arr: number[] = [1, 2, 3].map(n => n * 2);
class MyClass { value: number = 42; constructor() {} }
function greet(name: string): string { return `Hi, ${name}!`; }
async function fetchData(): Promise<void> { await Promise.resolve(); }
type Status = 'active' | 'inactive';
if (condition: boolean) { doSomething(); }
for (let i: number = 0; i < 5; i++) { console.log(i); }
