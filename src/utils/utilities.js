import moment from 'moment';
import { GlobalConstants } from '@constants/global-constants';

export const constructTime = (now, then, type = null) => {
	var ms = moment(now, GlobalConstants.momentFormat).diff(moment(then, GlobalConstants.momentFormat));
	var d = moment.duration(ms);
	switch (type) {
		case 'isExceeded':
			return d.seconds() < 0;
		case 'isUnderOneHour':
			return parseInt(d.asHours()) < 1;
		default:
			return `${d.days()}d ${parseInt(d.asHours())}h ${d.minutes()}m ${d.seconds()}s`;
	}

	// return (type = 'isExceeded'
	// 	? d.seconds() < 0
	// 	: type === 'isUnderOneHour'
	// 	? parseInt(d.asHours()) < 0
	// 	: `${d.days()}d ${parseInt(d.asHours())}h ${d.minutes()}m ${d.seconds()}s`);
};
