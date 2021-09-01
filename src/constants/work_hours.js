import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

const MAX_HOUR = 18;

let WORK_HOURS = [];
for (let i = 8; i < MAX_HOUR; i++) {
  WORK_HOURS.push(setHours(setMinutes(new Date(), 0), i));
  WORK_HOURS.push(setHours(setMinutes(new Date(), 30), i));
}
WORK_HOURS.push(setHours(setMinutes(new Date(), 0), MAX_HOUR));

export default WORK_HOURS;
