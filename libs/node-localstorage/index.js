if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("./LocalStorage").LocalStorage;
    //var LocalStorage = require('node-localstorage').LocalStorage;
    global.localStorage = new LocalStorage("./tmp/storage");
}
module.exports.localStorage = localStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbm9kZS1sb2NhbHN0b3JhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtJQUNoRSxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDNUQsK0RBQStEO0lBQy9ELE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7Q0FDekQ7QUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMifQ==