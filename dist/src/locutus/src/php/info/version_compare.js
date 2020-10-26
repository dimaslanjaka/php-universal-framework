module.exports = function version_compare(v1, v2, operator) {
    //       discuss at: https://locutus.io/php/version_compare/
    //      original by: Philippe Jausions (https://pear.php.net/user/jausions)
    //      original by: Aidan Lister (https://aidanlister.com/)
    // reimplemented by: Kankrelune (https://www.webfaktory.info/)
    //      improved by: Brett Zamir (https://brett-zamir.me)
    //      improved by: Scott Baker
    //      improved by: Theriault (https://github.com/Theriault)
    //        example 1: version_compare('8.2.5rc', '8.2.5a')
    //        returns 1: 1
    //        example 2: version_compare('8.2.50', '8.2.52', '<')
    //        returns 2: true
    //        example 3: version_compare('5.3.0-dev', '5.3.0')
    //        returns 3: -1
    //        example 4: version_compare('4.1.0.52','4.01.0.51')
    //        returns 4: 1
    // Important: compare must be initialized at 0.
    var i;
    var x;
    var compare = 0;
    // vm maps textual PHP versions to negatives so they're less than 0.
    // PHP currently defines these as CASE-SENSITIVE. It is important to
    // leave these as negatives so that they can come before numerical versions
    // and as if no letters were there to begin with.
    // (1alpha is < 1 and < 1.1 but > 1dev1)
    // If a non-numerical value can't be mapped to this table, it receives
    // -7 as its value.
    var vm = {
        'dev': -6,
        'alpha': -5,
        'a': -5,
        'beta': -4,
        'b': -4,
        'RC': -3,
        'rc': -3,
        '#': -2,
        'p': 1,
        'pl': 1
    };
    // This function will be called to prepare each version argument.
    // It replaces every _, -, and + with a dot.
    // It surrounds any nonsequence of numbers/dots with dots.
    // It replaces sequences of dots with a single dot.
    //    version_compare('4..0', '4.0') === 0
    // Important: A string of 0 length needs to be converted into a value
    // even less than an unexisting value in vm (-7), hence [-8].
    // It's also important to not strip spaces because of this.
    //   version_compare('', ' ') === 1
    var _prepVersion = function (v) {
        v = ('' + v).replace(/[_\-+]/g, '.');
        v = v.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.');
        return (!v.length ? [-8] : v.split('.'));
    };
    // This converts a version component to a number.
    // Empty component becomes 0.
    // Non-numerical component becomes a negative number.
    // Numerical component becomes itself as an integer.
    var _numVersion = function (v) {
        return !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10));
    };
    v1 = _prepVersion(v1);
    v2 = _prepVersion(v2);
    x = Math.max(v1.length, v2.length);
    for (i = 0; i < x; i++) {
        if (v1[i] === v2[i]) {
            continue;
        }
        v1[i] = _numVersion(v1[i]);
        v2[i] = _numVersion(v2[i]);
        if (v1[i] < v2[i]) {
            compare = -1;
            break;
        }
        else if (v1[i] > v2[i]) {
            compare = 1;
            break;
        }
    }
    if (!operator) {
        return compare;
    }
    // Important: operator is CASE-SENSITIVE.
    // "No operator" seems to be treated as "<."
    // Any other values seem to make the function return null.
    switch (operator) {
        case '>':
        case 'gt':
            return (compare > 0);
        case '>=':
        case 'ge':
            return (compare >= 0);
        case '<=':
        case 'le':
            return (compare <= 0);
        case '===':
        case '=':
        case 'eq':
            return (compare === 0);
        case '<>':
        case '!==':
        case 'ne':
            return (compare !== 0);
        case '':
        case '<':
        case 'lt':
            return (compare < 0);
        default:
            return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbl9jb21wYXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zcmMvbG9jdXR1cy9zcmMvcGhwL2luZm8vdmVyc2lvbl9jb21wYXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxlQUFlLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRO0lBQ3pELDREQUE0RDtJQUM1RCwyRUFBMkU7SUFDM0UsNERBQTREO0lBQzVELDhEQUE4RDtJQUM5RCx5REFBeUQ7SUFDekQsZ0NBQWdDO0lBQ2hDLDZEQUE2RDtJQUM3RCx5REFBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLDZEQUE2RDtJQUM3RCx5QkFBeUI7SUFDekIsMERBQTBEO0lBQzFELHVCQUF1QjtJQUN2Qiw0REFBNEQ7SUFDNUQsc0JBQXNCO0lBRXRCLCtDQUErQztJQUMvQyxJQUFJLENBQUMsQ0FBQTtJQUNMLElBQUksQ0FBQyxDQUFBO0lBQ0wsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFBO0lBRWYsb0VBQW9FO0lBQ3BFLG9FQUFvRTtJQUNwRSwyRUFBMkU7SUFDM0UsaURBQWlEO0lBQ2pELHdDQUF3QztJQUN4QyxzRUFBc0U7SUFDdEUsbUJBQW1CO0lBQ25CLElBQUksRUFBRSxHQUFHO1FBQ1AsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDWCxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNWLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDUCxHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO0tBQ1IsQ0FBQTtJQUVELGlFQUFpRTtJQUNqRSw0Q0FBNEM7SUFDNUMsMERB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