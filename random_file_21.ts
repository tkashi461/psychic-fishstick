function greet(name: string): string { return `Hi, ${name}!`; }
class MyClass { value: number = 42; constructor() {} }
const x: number = Math.random() * 100;
console.log('Hello, TypeScript!');
for (let i: number = 0; i < 5; i++) { console.log(i); }
let arr: number[] = [1, 2, 3].map(n => n * 2);
type Status = 'active' | 'inactive';
if (condition: boolean) { doSomething(); }
async function fetchData(): Promise<void> { await Promise.resolve(); }
interface User { name: string; age: number; }
