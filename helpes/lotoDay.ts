import { LOTOVN } from './lotoMockUp';

function transformLotoDay(day, slugArr, name = '', slug = '') {

    const newday = day.map((item) => {

        if (slugArr.indexOf(item.slug) > -1) {

            if(item.slug.indexOf('xo-so') > -1) {

                return { name: name, slug: slug, active: 'active' }
            }

            return { name:item.name, slug: item.slug, active: 'active' }

        } else {

            if(item.slug.indexOf('xo-so') > -1) {

                return { name: name, slug: slug, active: '' }
            }

            return item;
        }
    })

    return newday;
}

function getAreaName(area) {
    const areaMap = { 'xo-so-mien-bac': 'Miền Bắc', 'xo-so-mien-nam': 'Miền Nam', 'xo-so-mien-trung': 'Miền Trung' };
    
    let areaName = 'Miền Bắc';

    if(areaMap[area]) {

        areaName = areaMap[area];
    }
    return areaName
}

function getDayActiveArea(day, area) {

    let newday = [];

    const areaName = getAreaName(area);

    newday = transformLotoDay(day, ['xo-so-mien-bac'], areaName);

    return newday;

}

function transformDate(date) {

    let newdate = '';

    const dateArr = date.split('-');

    if(dateArr.length === 3) {
        newdate = dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
    }

    return newdate;
}

function getWeekDay(date) {

    const dayOfWeek = new Date(date).getDay();

    return isNaN(dayOfWeek) ? null : 
    ['chu-nhat', 'thu-2', 'thu-3', 'thu-4', 'thu-5', 'thu-6', 'thu-7'][dayOfWeek];
}

function getDayActiveAreaDate(day,area, area_date) {

    const date = transformDate(area_date);

    const areaName = getAreaName(area);

    const slug = getWeekDay(date);

    const newday = transformLotoDay(day, [slug], areaName, area);
    
    return newday;
}

function getDayActiveAreaDay(day, area, area_day) {

    const areaName = getAreaName(area);

    const newday = transformLotoDay(day, [area_day], areaName, area);

    return newday;
}

function getDayActiveAreaCity(day, area, area_city) {

    let newday = [];

    const lotovn = { ...LOTOVN['xo-so-mien-bac'],...LOTOVN['xo-so-mien-nam'], ...LOTOVN['xo-so-mien-trung'] };

    const dayObj = lotovn[area_city];

    let slugArr = [];

    if(dayObj.day.length) {

        for (let i = 0; i < dayObj.day.length; i++) {
            slugArr.push(dayObj.day[i].slug);
        }
    }

    const areaName = getAreaName(area);

    newday = transformLotoDay(day, slugArr, areaName, area);

    return newday;

}

function getDayActiveAreaCityDate(day, area, area_city_date) {
 
    const date = transformDate(area_city_date);

    const areaName = getAreaName(area);

    const slug = getWeekDay(date);

    const newday = transformLotoDay(day, [slug], areaName, area);
    
    return newday;
}

export const getDayActive = (day, query) => {

    switch (query.type) {
        case '':
            return day;
        case 'area':
            return getDayActiveArea(day, query.area);
        case 'area-date':
            return getDayActiveAreaDate(day, query.area, query.daydatecity);
        case 'area-day':
            return getDayActiveAreaDay(day, query.area, query.daydatecity);
        case 'area-city':
            return getDayActiveAreaCity(day, query.area, query.daydatecity);
        case 'area-city-date':
            return getDayActiveAreaCityDate(day, query.area, query.date);
        default: return day;
    }

}