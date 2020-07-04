module.exports = function nl_langinfo(item) {
    //  discuss at: https://locutus.io/php/nl_langinfo/
    // original by: Brett Zamir (https://brett-zamir.me)
    //   example 1: nl_langinfo('DAY_1')
    //   returns 1: 'Sunday'
    var setlocale = require('../strings/setlocale');
    setlocale('LC_ALL', 0); // Ensure locale data is available
    var $global = (typeof window !== 'undefined' ? window : global);
    $global.$locutus = $global.$locutus || {};
    var $locutus = $global.$locutus;
    $locutus.php = $locutus.php || {};
    var loc = $locutus.php.locales[$locutus.php.localeCategories.LC_TIME];
    if (item.indexOf('ABDAY_') === 0) {
        return loc.LC_TIME.a[parseInt(item.replace(/^ABDAY_/, ''), 10) - 1];
    }
    else if (item.indexOf('DAY_') === 0) {
        return loc.LC_TIME.A[parseInt(item.replace(/^DAY_/, ''), 10) - 1];
    }
    else if (item.indexOf('ABMON_') === 0) {
        return loc.LC_TIME.b[parseInt(item.replace(/^ABMON_/, ''), 10) - 1];
    }
    else if (item.indexOf('MON_') === 0) {
        return loc.LC_TIME.B[parseInt(item.replace(/^MON_/, ''), 10) - 1];
    }
    else {
        switch (item) {
            // More LC_TIME
            case 'AM_STR':
                return loc.LC_TIME.p[0];
            case 'PM_STR':
                return loc.LC_TIME.p[1];
            case 'D_T_FMT':
                return loc.LC_TIME.c;
            case 'D_FMT':
                return loc.LC_TIME.x;
            case 'T_FMT':
                return loc.LC_TIME.X;
            case 'T_FMT_AMPM':
                return loc.LC_TIME.r;
            case 'ERA':
            case 'ERA_YEAR':
            case 'ERA_D_T_FMT':
            case 'ERA_D_FMT':
            case 'ERA_T_FMT':
                // all fall-throughs
                return loc.LC_TIME[item];
        }
        loc = $locutus.php.locales[$locutus.php.localeCategories.LC_MONETARY];
        if (item === 'CRNCYSTR') {
            // alias
            item = 'CURRENCY_SYMBOL';
        }
        switch (item) {
            case 'INT_CURR_SYMBOL':
            case 'CURRENCY_SYMBOL':
            case 'MON_DECIMAL_POINT':
            case 'MON_THOUSANDS_SEP':
            case 'POSITIVE_SIGN':
            case 'NEGATIVE_SIGN':
            case 'INT_FRAC_DIGITS':
            case 'FRAC_DIGITS':
            case 'P_CS_PRECEDES':
            case 'P_SEP_BY_SPACE':
            case 'N_CS_PRECEDES':
            case 'N_SEP_BY_SPACE':
            case 'P_SIGN_POSN':
            case 'N_SIGN_POSN':
                // all fall-throughs
                return loc.LC_MONETARY[item.toLowerCase()];
            case 'MON_GROUPING':
                // Same as above, or return something different since this returns an array?
                return loc.LC_MONETARY[item.toLowerCase()];
        }
        loc = $locutus.php.locales[$locutus.php.localeCategories.LC_NUMERIC];
        switch (item) {
            case 'RADIXCHAR':
            case 'DECIMAL_POINT':
                // Fall-through
                return loc.LC_NUMERIC[item.toLowerCase()];
            case 'THOUSEP':
            case 'THOUSANDS_SEP':
                // Fall-through
                return loc.LC_NUMERIC[item.toLowerCase()];
            case 'GROUPING':
                // Same as above, or return something different since this returns an array?
                return loc.LC_NUMERIC[item.toLowerCase()];
        }
        loc = $locutus.php.locales[$locutus.php.localeCategories.LC_MESSAGES];
        switch (item) {
            case 'YESEXPR':
            case 'NOEXPR':
            case 'YESSTR':
            case 'NOSTR':
                // all fall-throughs
                return loc.LC_MESSAGES[item];
        }
        loc = $locutus.php.locales[$locutus.php.localeCategories.LC_CTYPE];
        if (item === 'CODESET') {
            return loc.LC_CTYPE[item];
        }
        return false;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmxfbGFuZ2luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3NyYy9sb2N1dHVzL3NyYy9waHAvc3RyaW5ncy9ubF9sYW5naW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsV0FBVyxDQUFFLElBQUk7SUFDekMsbURBQW1EO0lBQ25ELG9EQUFvRDtJQUNwRCxvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBRXhCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBRS9DLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxrQ0FBa0M7SUFFekQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0QsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQTtJQUN6QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFBO0lBQy9CLFFBQVEsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUE7SUFFakMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0tBQ3BFO1NBQU0sSUFBSSxJ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