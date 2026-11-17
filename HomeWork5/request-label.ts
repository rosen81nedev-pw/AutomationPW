const requestName = 'REQ';
const requestID = '1042';
const requestPriority = '[P2]';
const requestDescription = 'Broken street light';
const requestType = 'Lighting';

const label = '${requestName}-${requestID} ${requestPriority} ${requestDescription} (${requestType})';

console.log(label);
console.log('The label lenght is ${label.lenght}');
