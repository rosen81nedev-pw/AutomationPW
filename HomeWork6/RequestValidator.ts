//Write a request status validator: given the current and the next status, print whether the 
//transition is allowed (Submitted → In Review → Resolved; In Review → Waiting for Info → In Review)
let currentStatus = 'Resolved';
let nexStatus = 'In Review';

switch (currentStatus) {
    case 'Submitted':
        if (nexStatus === 'In review') {
            console.log('The transition is allowed.');
        } else {
            console.log('Invalid status - not allowed transition.')
        } 
        break;
    case 'In review':
        if (nexStatus === 'Resolved' || nexStatus == 'Waiting for Info'){
            console.log('The transition is allowed.');
        } else {
            console.log('Invalid status - not allowed transition.')
        }
        break;
    case 'Resolved':
        if (nexStatus == 'Resolved'){
            console.log('The transition is allowed. Request is Resolved');
        } else {
            console.log('Invalid status - not allowed transition.')
        }
        break;
    case 'Waiting for Info':
        if (nexStatus === 'In review'){
            console.log('The transition is allowed.');
        } else {
            console.log('Invalid status - not allowed transition.')
        }
        break;
    default:
        console.log('The status is undefined: $currentStatus')

}

//Print a text table of requests: id, title padded to 25 characters, priority, status
const requests = [
  { id: 1, title: "Request for test1", priority: 1, status: "Status1" },
  { id: 2, title: "Request for test2", priority: 2, status: "Status2" },
  { id: 3, title: "Request for test3", priority: 3, status: "Status3" },
  { id: 4, title: "Request for test4", priority: 4, status: "Status4" },
  { id: 5, title: "Request for test5", priority: 5, status: "Status5" },
];
for (const r of requests) {
  console.log(
    `${String(r.id)} ` +
    `${r.title.padEnd(25)} ` +
    `${r.priority} ` +
    `${r.status}`
  );
}

//Generate test data: 10 request titles "Test request 01" …"Test request 10"
//with priorities cycling 1–5
const requestsNew = [];
let i = 1;
do {
  requestsNew.push({
    title: `Test request ${i < 10 ? "0" + i : i}`,
    priority: ((i - 1) % 5) + 1
  });

  i++;
} while (i <= 10);

console.log(requestsNew);

//Print the allowed transitions as a matrix using nested loops
const statuses1 = [
    'Submitted',
    'In review',
    'Resolved',
    'Waiting for Info'
];

for (let i = 0; i < statuses1.length; i++) {
    for (let j = 0; j < statuses1.length; j++) {
        const currentStatus1 = statuses1[i];
        const nextStatus1 = statuses1[j];

        let allowed = false;

        switch (currentStatus) {
            case 'Submitted':
                allowed = nextStatus1 === 'In review';
                break;
            case 'In review':
                allowed = nextStatus1 === 'Resolved' || nextStatus1 === 'Waiting for Info';
                break;
            case 'Resolved':
                allowed = nextStatus1 === 'Resolved';
                break;
            case 'Waiting for Info':
                allowed = nextStatus1 === 'In review';
                break;
        }

        console.log(
            currentStatus1 + ' -> ' + nextStatus1 + ': ' +
            (allowed ? 'Allowed' : 'Not Allowed')
        );
    }
}