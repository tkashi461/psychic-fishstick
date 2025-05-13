console.log('Hello, TypeScript!');
let arr: number[] = [1, 2, 3].map(n => n * 2);
async function fetchData(): Promise<void> { await Promise.resolve(); }
function greet(name: string): string { return `Hi, ${name}!`; }
for (let i: number = 0; i < 5; i++) { console.log(i); }
class MyClass { value: number = 42; constructor() {} }
interface User { name: string; age: number; }
const x: number = Math.random() * 100;
type Status = 'active' | 'inactive';
if (condition: boolean) { doSomething(); }
