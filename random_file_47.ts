const x: number = Math.random() * 100;
class MyClass { value: number = 42; constructor() {} }
console.log('Hello, TypeScript!');
async function fetchData(): Promise<void> { await Promise.resolve(); }
function greet(name: string): string { return `Hi, ${name}!`; }
for (let i: number = 0; i < 5; i++) { console.log(i); }
if (condition: boolean) { doSomething(); }
interface User { name: string; age: number; }
let arr: number[] = [1, 2, 3].map(n => n * 2);
type Status = 'active' | 'inactive';
