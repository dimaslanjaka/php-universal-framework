"use strict";
var tslib_1 = require("tslib");
var core_1 = tslib_1.__importDefault(require("./core"));
var misc = tslib_1.__importStar(require("./framework"));
var filemanager_1 = tslib_1.__importDefault(require("./filemanager"));
var log_1 = tslib_1.__importDefault(require("./log"));
var sorter_1 = tslib_1.__importDefault(require("./sorter"));
var process_1 = tslib_1.__importDefault(require("./process"));
var framework = /** @class */ (function (_super) {
    tslib_1.__extends(framework, _super);
    function framework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filemanager = filemanager_1.default;
        _this.log = log_1.default;
        _this.sorter = sorter_1.default;
        _this.process = process_1.default;
        return _this;
    }
    framework.filemanager = filemanager_1.default;
    framework.misc = misc.dimas;
    framework.log = log_1.default;
    framework.sorter = sorter_1.default;
    framework.process = process_1.default;
    return framework;
}(core_1.default));
module.exports = framework;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29tcGlsZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3REFBMEI7QUFDMUIsd0RBQW9DO0FBQ3BDLHNFQUF3QztBQUN4QyxzREFBd0I7QUFDeEIsNERBQThCO0FBQzlCLDhEQUFnQztBQUVoQztJQUF3QixxQ0FBSTtJQUE1QjtRQUFBLHFFQVVDO1FBVEMsaUJBQVcsR0FBZ0IscUJBQVcsQ0FBQztRQUd2QyxTQUFHLEdBQVEsYUFBRyxDQUFDO1FBRWYsWUFBTSxHQUFXLGdCQUFNLENBQUM7UUFFeEIsYUFBTyxHQUFZLGlCQUFPLENBQUM7O0lBRTdCLENBQUM7SUFSUSxxQkFBVyxHQUFnQixxQkFBVyxDQUFDO0lBQ3ZDLGNBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRWxCLGFBQUcsR0FBUSxhQUFHLENBQUM7SUFFZixnQkFBTSxHQUFXLGdCQUFNLENBQUM7SUFFeEIsaUJBQU8sR0FBWSxpQkFBTyxDQUFDO0lBQ3BDLGdCQUFDO0NBQUEsQUFWRCxDQUF3QixjQUFJLEdBVTNCO0FBRUQsaUJBQVMsU0FBUyxDQUFDIn0=