// Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const data1 = new Date();
const data2 = new Date('March 06 2019 09:30');
const date3 = new Date(2019,2,6,9,30);

date3.setFullYear(2030)

// data2.toDateString() retorna como uma string
// data2.toTimeString() retorna uma string + local do horario
// data2.toISOString() + retorama a marinra mais usada para servideres no backend