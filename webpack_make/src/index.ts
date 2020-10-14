import dayjs from 'dayjs';

const dayOfWeek = (params:string):string => dayjs(params).format('dddd');

export default dayOfWeek;