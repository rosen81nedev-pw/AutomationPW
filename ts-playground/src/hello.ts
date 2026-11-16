const name = 'Maria';
const sessions = 36;

console.log('Hello, ' + name);
console.log(`Welcome ${name}, the programme has ${sessions} sessions`);
console.table([{ id: 1, status: 'Submitted' }]);

// id, title, category, priority (1-5), isUrgent, assignee (may be empty)

const id: number = 1234;
let title: sting = 'My Request';
let category: 'Water system' | 'Traffic' | 'Streets' = 'Water system';
let priority: 1 | 2 | 3 | 4 | 5 = 4;
let assignee: string | null = 'Rosen';
let isUrgent: boolean = true;

console.log('Request $id');
