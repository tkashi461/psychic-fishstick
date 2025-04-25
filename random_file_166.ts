const x: number = Math.random() * 100;
type Status = 'active' | 'inactive';
console.log('Hello, TypeScript!');
class MyClass { value: number = 42; constructor() {} }
for (let i: number = 0; i < 5; i++) { console.log(i); }
function greet(name: string): string { return `Hi, ${name}!`; }
if (condition: boolean) { doSomething(); }
async function fetchData(): Promise<void> { await Promise.resolve(); }
let arr: number[] = [1, 2, 3].map(n => n * 2);
