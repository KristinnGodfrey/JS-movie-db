function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

const videoAgeMap = (unit) => {
    const now = new Date();
    const created = new Date(unit);
    const fake = new Date(2021,0,25);
    const fake2 = new Date(2021,10,28);
    // console.log(created)
    

    const year = (now.getFullYear() - created.getFullYear());
    let month = ((now.getMonth()+1+12) - (created.getMonth()+1));
    
    // month = (month >= 12) ? month = 0 : month = month;
    // console.log("now:" , now.getMonth()+1);
    // console.log(fake.getMonth()+1);
    // console.log(month);

    // 26 - 30 = -4
    // vil fá 

    // console.log("now:" , now.getDate());
    // console.log(created.getDate());  
    let day = null;
    if (now.getDate() < created.getDate()){
        day = (now.getDate() + daysInMonth(created.getMonth(), created.getFullYear()) - created.getDate());    
    }
    else {
        day = (now.getDate() - created.getDate()); 
    }

    // console.log(day);
    // if (year == 1) return `Fyrir {year} ári síðan`;
    if (year > 1) return `Fyrir ${year} árum síðan`;
    // if (month == 1) return `Fyrir {month} mánuði síðan`;
    if (month > 1) return `Fyrir ${month} mánuðum síðan`;
    if (day > 1) return `Fyrir ${day} dögum síðan`;

    return unit;
};

exports.videoAgeMap = videoAgeMap;

