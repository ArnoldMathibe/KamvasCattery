function weeklyWage(band, weeklyHours) {
    var A = 23;
    var B = 37;
    var C = 51;
    var total;

    if(band == A)
    {
        for (let i = 0; i < weeklyHours.length; i++) {
            return weeklyHours += (A*weeklyHours)
        }
    }else if(band == B)
    {
        return total += (B*weeklyHours)
    }else if(band == B && weeklyHours.length() < 7)
    {
        return 'missing day'
    }else if(band != B){
        return 0;
    }
};
