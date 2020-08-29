import { SCHEDULE, LOTOVN } from './lotoMockUp';


function checkDate(date: string) {
    return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(date);
}

export const checkParams = (query) => {

    let results = {
        status: true,
        area: '',
        daydatecity: '',
        date: '',
        type: ''
    };

    if (query.area) {

		let include = ['xo-so-mien-bac', 'xo-so-mien-trung', 'xo-so-mien-nam'];

        let area = query.area as string;
        
        results.area = area;

        results.type = 'area';

        if (include.indexOf(area) === -1) {
            results.status = false;
            return results;
		}

		if(query.daydatecity) {

            let daydatecity = query.daydatecity as string;

            results.daydatecity = daydatecity;

			if (daydatecity.indexOf('ngay-') > -1) {

                let dateStr = daydatecity.replace('ngay-', '').trim();

                results.daydatecity = dateStr;

                if (checkDate(dateStr) === false) {

                    results.status = false;
                    return results;
                }

                results.type = 'area-date';

			} else {

                let lotovn = { ...LOTOVN['xo-so-mien-bac'],...LOTOVN['xo-so-mien-nam'], ...LOTOVN['xo-so-mien-trung'] };
                
				if(Object.keys(SCHEDULE).indexOf(daydatecity) === -1 && Object.keys(lotovn).indexOf(daydatecity) === -1) {

                    results.status = false;
                    return results;
				} else if(Object.keys(lotovn).indexOf(daydatecity) > -1) {
                    
                    if(!LOTOVN[area][daydatecity]) {
                        results.status = false;
                        return results;
                    }
                    results.type = 'area-city';
                } else if(Object.keys(SCHEDULE).indexOf(daydatecity) > -1) {
                    results.type = 'area-day';
                }
			}
		}

		if (query.date) {

            let lotovnDate = { ...LOTOVN['xo-so-mien-bac'],...LOTOVN['xo-so-mien-nam'], ...LOTOVN['xo-so-mien-trung'] }
            
            let queryDayDateCity = query.daydatecity as string;

            let dateStr = query.date as string;

			if(Object.keys(lotovnDate).indexOf(queryDayDateCity) === -1) {
                
                results.status = false;
                return results;
            }

			if (dateStr.indexOf('ngay-') > -1) {

                let dater = dateStr.replace('ngay-', '').trim();

                results.date = dater;
                
				if (checkDate(dater) === false) {
                    results.status = false;
                    return results;
                }
            } else {
                results.status = false;
                return results;
            }

            results.type = 'area-city-date';
		}
        
    }
    
    return results;
}