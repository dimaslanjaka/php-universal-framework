module.exports = function _php_cast_int(value) {
    // original by: Rafał Kukawski
    //   example 1: _php_cast_int(false)
    //   returns 1: 0
    //   example 2: _php_cast_int(true)
    //   returns 2: 1
    //   example 3: _php_cast_int(0)
    //   returns 3: 0
    //   example 4: _php_cast_int(1)
    //   returns 4: 1
    //   example 5: _php_cast_int(3.14)
    //   returns 5: 3
    //   example 6: _php_cast_int('')
    //   returns 6: 0
    //   example 7: _php_cast_int('0')
    //   returns 7: 0
    //   example 8: _php_cast_int('abc')
    //   returns 8: 0
    //   example 9: _php_cast_int(null)
    //   returns 9: 0
    //  example 10: _php_cast_int(undefined)
    //  returns 10: 0
    //  example 11: _php_cast_int('123abc')
    //  returns 11: 123
    //  example 12: _php_cast_int('123e4')
    //  returns 12: 123
    //  example 13: _php_cast_int(0x200000001)
    //  returns 13: 8589934593
    var type = typeof value;
    switch (type) {
        case 'number':
            if (isNaN(value) || !isFinite(value)) {
                // from PHP 7, NaN and Infinity are casted to 0
                return 0;
            }
            return value < 0 ? Math.ceil(value) : Math.floor(value);
        case 'string':
            return parseInt(value, 10) || 0;
        case 'boolean':
        // fall through
        default:
            // Behaviour for types other than float, string, boolean
            // is undefined and can change any time.
            // To not invent complex logic
            // that mimics PHP 7.0 behaviour
            // casting value->bool->number is used
            return +!!value;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3BocF9jYXN0X2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sb2N1dHVzL3NyYy9waHAvX2hlbHBlcnMvX3BocF9jYXN0X2ludC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsYUFBYSxDQUFFLEtBQUs7SUFDNUMsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQywwQkFBMEI7SUFFMUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxLQUFLLENBQUE7SUFFdkIsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLFFBQVE7WUFDWCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsK0NBQStDO2dCQUMvQyxPQUFPLENBQUMsQ0FBQTthQUNUO1lBRUQsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pELEtBQUssUUFBUTtZQUNYLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakMsS0FBSyxTQUFTLENBQUM7UUFDYixlQUFlO1FBQ2pCO1lBQ0Usd0RBQXdEO1lBQ3hELHdDQUF3QztZQUN4Qyw4QkFBOEI7WUFDOUIsZ0NBQWdDO1lBQ2hDLHNDQUFzQztZQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtLQUNsQjtBQUNILENBQUMsQ0FBQSJ9