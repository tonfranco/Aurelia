define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.map([
                {
                    route: ["", "pessoa"],
                    moduleId: "pessoa",
                    title: "Pessoas",
                    nav: true
                },
                {
                    route: ["Sobre"],
                    moduleId: "sobre",
                    title: "Sobre",
                    nav: true
                },
                {
                    route: ["GitHub"],
                    moduleId: "github",
                    title: "Github",
                    nav: true
                }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBMkJBLENBQUM7UUF6QkMsNkJBQWUsR0FBZixVQUFnQixNQUFNLEVBQUUsTUFBTTtZQUU1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVyQixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNUO29CQUNFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxRQUFRLENBQUM7b0JBQ3BCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsU0FBUztvQkFDaEIsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNoQixRQUFRLEVBQUUsT0FBTztvQkFDakIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNqQixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0gsVUFBQztJQUFELENBM0JBLEFBMkJDLElBQUE7SUEzQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKVxuICB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cbiAgICBjb25maWcubWFwKFtcbiAgICAgIHtcbiAgICAgICAgcm91dGU6IFtcIlwiLFwicGVzc29hXCJdLFxuICAgICAgICBtb2R1bGVJZDogXCJwZXNzb2FcIixcbiAgICAgICAgdGl0bGU6IFwiUGVzc29hc1wiLFxuICAgICAgICBuYXY6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiBbXCJTb2JyZVwiXSxcbiAgICAgICAgbW9kdWxlSWQ6IFwic29icmVcIixcbiAgICAgICAgdGl0bGU6IFwiU29icmVcIixcbiAgICAgICAgbmF2OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogW1wiR2l0SHViXCJdLFxuICAgICAgICBtb2R1bGVJZDogXCJnaXRodWJcIixcbiAgICAgICAgdGl0bGU6IFwiR2l0aHViXCIsXG4gICAgICAgIG5hdjogdHJ1ZVxuICAgICAgfVxuICAgIF0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('busy',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var busy = (function () {
        function busy() {
            this.active = false;
        }
        busy.prototype.on = function () {
            this.active = true;
        };
        busy.prototype.off = function () {
            this.active = false;
            console.log("deixando false:" + this.active);
        };
        busy.prototype.delay = function (ms) {
            return new Promise(function (resolve) { return setTimeout(resolve, ms); });
        };
        return busy;
    }());
    exports.busy = busy;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQ0E7UUFBQTtZQUNFLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFnQnpCLENBQUM7UUFkQyxpQkFBRSxHQUFGO1lBRUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQUVELGtCQUFHLEdBQUg7WUFFRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRUQsb0JBQUssR0FBTCxVQUFNLEVBQVU7WUFDWixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNILFdBQUM7SUFBRCxDQWpCQSxBQWlCQyxJQUFBO0lBakJZLG9CQUFJIiwiZmlsZSI6ImJ1c3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBidXN5IHtcbiAgYWN0aXZlOmJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIG9uKCkgXG4gIHtcbiAgICAgdGhpcy5hY3RpdmUgPSB0cnVlOyBcbiAgfVxuICBcbiAgb2ZmKCkgXG4gIHsgXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTsgXG4gICAgY29uc29sZS5sb2coXCJkZWl4YW5kbyBmYWxzZTpcIiArIHRoaXMuYWN0aXZlKTtcbiAgfVxuXG4gIGRlbGF5KG1zOiBudW1iZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('github',["require", "exports", "aurelia-framework", "aurelia-fetch-client", "./busy"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, busy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GitHub = (function () {
        function GitHub(http, busy) {
            this.http = http;
            this.busy = busy;
            this.nmBusca = "";
            this.message = "";
            this.configurarApi();
        }
        GitHub.prototype.activate = function () {
            this.fetchData();
        };
        GitHub.prototype.fetchData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.busy.on();
                            return [4, this.busy.delay(3000)];
                        case 1:
                            _a.sent();
                            data = this.http.fetch("")
                                .then(function (response) { return response.json(); })
                                .then(function (rep) { return _this.repos = rep; });
                            this.busy.off();
                            return [2];
                    }
                });
            });
        };
        GitHub.prototype.pesquisar = function () {
            if (this.validateMe()) {
                this.configurarApi();
                this.fetchData();
            }
        };
        GitHub.prototype.configurarApi = function () {
            var _this = this;
            this.busy.off();
            if (this.nmBusca == '')
                this.http.configure(function (config) {
                    config
                        .useStandardConfiguration()
                        .withBaseUrl('https://api.github.com/users/jj09/repos');
                });
            else
                this.http.configure(function (config) {
                    config
                        .useStandardConfiguration()
                        .withBaseUrl('https://api.github.com/users/' + _this.nmBusca + '/repos');
                });
        };
        GitHub.prototype.validateMe = function () {
            return true;
        };
        return GitHub;
    }());
    GitHub = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, busy_1.busy])
    ], GitHub);
    exports.GitHub = GitHub;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBLElBQWEsTUFBTTtRQUtmLGdCQUFvQixJQUFnQixFQUFVLElBQVM7WUFBbkMsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUFVLFNBQUksR0FBSixJQUFJLENBQUs7WUFIdkQsWUFBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7WUFJVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVELHlCQUFRLEdBQVI7WUFFSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUVLLDBCQUFTLEdBQWY7OztvQkFNUSxJQUFJOzs7OzRCQUpSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBRWYsV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7NEJBQTNCLFNBQTJCLENBQUM7bUNBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztpQ0FDakIsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQ0FDakMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQWhCLENBQWdCLENBQUM7NEJBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7O1NBQ25CO1FBRUQsMEJBQVMsR0FBVDtZQUVJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUNyQixDQUFDO2dCQUNHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDO1FBRU8sOEJBQWEsR0FBckI7WUFBQSxpQkFlQztZQWJHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtvQkFDbEIsTUFBTTt5QkFDTCx3QkFBd0IsRUFBRTt5QkFDMUIsV0FBVyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7Z0JBQ2hFLENBQUMsQ0FBQyxDQUFDO1lBQ1AsSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07b0JBQ2xCLE1BQU07eUJBQ0wsd0JBQXdCLEVBQUU7eUJBQzFCLFdBQVcsQ0FBQywrQkFBK0IsR0FBRSxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCwyQkFBVSxHQUFWO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0wsYUFBQztJQUFELENBMURBLEFBMERDLElBQUE7SUExRFksTUFBTTtRQURsQiw4QkFBVTt5Q0FNbUIsaUNBQVUsRUFBZSxXQUFJO09BTDlDLE1BQU0sQ0EwRGxCO0lBMURZLHdCQUFNIiwiZmlsZSI6ImdpdGh1Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJhdXJlbGlhLWZldGNoLWNsaWVudFwiO1xuaW1wb3J0IHtidXN5fSBmcm9tIFwiLi9idXN5XCI7XG5cbkBhdXRvaW5qZWN0XG5leHBvcnQgY2xhc3MgR2l0SHVie1xuICAgIHByaXZhdGUgcmVwb3M7XG4gICAgbm1CdXNjYSA9IFwiXCI7XG4gICAgbWVzc2FnZSA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgYnVzeTpidXN5KVxuICAgIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmFyQXBpKCk7XG4gICAgfSBcblxuICAgIGFjdGl2YXRlKClcbiAgICB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hEYXRhKClcbiAgICB7XG4gICAgICAgIHRoaXMuYnVzeS5vbigpO1xuICAgICAgICBcbiAgICAgICAgYXdhaXQgdGhpcy5idXN5LmRlbGF5KDMwMDApO1xuXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5odHRwLmZldGNoKFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVwID0+IHRoaXMucmVwb3MgPSByZXApO1xuXG4gICAgICAgIHRoaXMuYnVzeS5vZmYoKTtcbiAgICB9XG5cbiAgICBwZXNxdWlzYXIoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy52YWxpZGF0ZU1lKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhckFwaSgpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY29uZmlndXJhckFwaSgpXG4gICAge1xuICAgICAgICB0aGlzLmJ1c3kub2ZmKCk7XG4gICAgICAgIGlmKHRoaXMubm1CdXNjYSA9PSAnJylcbiAgICAgICAgICAgIHRoaXMuaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvamowOS9yZXBvcycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJysgdGhpcy5ubUJ1c2NhICsgJy9yZXBvcycpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVNZSgpIFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBS3hCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBakJELDhCQWlCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xuXG4gICAgLy8gYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgICAvL2F1cmVsaWEudXNlLnBsdWdpbignLi4vbm9kZV9tb2R1bGVzL2F1cmVsaWEtdmFsaWRhdGlvbicpO1xuXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xuICB9XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('pessoa',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pessoa = (function () {
        function Pessoa() {
            this.nome = "Ton";
            this.sobreNome = "Franco";
            this.pessoas = [];
            this.editing = undefined;
        }
        Object.defineProperty(Pessoa.prototype, "NomeCompleto", {
            get: function () {
                return this.nome + " " + this.sobreNome;
            },
            enumerable: true,
            configurable: true
        });
        Pessoa.prototype.Add = function () {
            this.pessoas.push(this.NomeCompleto);
        };
        Pessoa.prototype.Delete = function (index) {
            this.pessoas.splice(index, 1);
        };
        Pessoa.prototype.Edit = function (index) {
            this.editing = index;
            this.newValue = this.pessoas[index];
        };
        Pessoa.prototype.Save = function (index) {
            this.pessoas[index] = this.newValue;
            this.editing = undefined;
        };
        return Pessoa;
    }());
    exports.Pessoa = Pessoa;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlc3NvYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQU9FO1lBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDM0IsQ0FBQztRQUVELHNCQUFJLGdDQUFZO2lCQUFoQjtnQkFFRSxNQUFNLENBQUksSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsU0FBVyxDQUFDO1lBQzFDLENBQUM7OztXQUFBO1FBRUQsb0JBQUcsR0FBSDtZQUVFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsdUJBQU0sR0FBTixVQUFPLEtBQUs7WUFFVixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVELHFCQUFJLEdBQUosVUFBSyxLQUFLO1lBRVIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCxxQkFBSSxHQUFKLFVBQUssS0FBSztZQUVSLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO1FBQ0gsYUFBQztJQUFELENBekNBLEFBeUNDLElBQUE7SUF6Q1ksd0JBQU0iLCJmaWxlIjoicGVzc29hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBlc3NvYSB7XG4gICAgbm9tZTtcbiAgICBzb2JyZU5vbWU7XG4gICAgcGVzc29hcztcbiAgICBlZGl0aW5nOyBcbiAgICBuZXdWYWx1ZTtcbiAgICBcbiAgY29uc3RydWN0b3IoKVxuICB7XG4gICAgdGhpcy5ub21lID0gXCJUb25cIjtcbiAgICB0aGlzLnNvYnJlTm9tZSA9IFwiRnJhbmNvXCI7XG4gICAgdGhpcy5wZXNzb2FzID0gW107XG4gICAgdGhpcy5lZGl0aW5nID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IE5vbWVDb21wbGV0bygpXG4gIHtcbiAgICByZXR1cm4gYCR7dGhpcy5ub21lfSAke3RoaXMuc29icmVOb21lfWA7XG4gIH1cblxuICBBZGQoKVxuICB7XG4gICAgdGhpcy5wZXNzb2FzLnB1c2godGhpcy5Ob21lQ29tcGxldG8pO1xuICB9XG5cbiAgRGVsZXRlKGluZGV4KVxuICB7IFxuICAgIHRoaXMucGVzc29hcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgRWRpdChpbmRleClcbiAgeyBcbiAgICB0aGlzLmVkaXRpbmcgPSBpbmRleDtcbiAgICB0aGlzLm5ld1ZhbHVlID0gdGhpcy5wZXNzb2FzW2luZGV4XTtcbiAgfVxuXG4gIFNhdmUoaW5kZXgpXG4gIHtcbiAgICB0aGlzLnBlc3NvYXNbaW5kZXhdID0gdGhpcy5uZXdWYWx1ZTtcbiAgICB0aGlzLmVkaXRpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('sobre',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sobre = (function () {
        function Sobre() {
        }
        return Sobre;
    }());
    exports.Sobre = Sobre;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvYnJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFLQSxDQUFDO1FBQUQsWUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksc0JBQUsiLCJmaWxlIjoic29icmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU29icmVcbntcblxuXG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n  <nav class=\"navbar navbar-inverse\"> \n    <div class=\"container-fluid\"> \n      <div class=\"navbar-header\">\n        <span class=\"navbar-brand glyphicon glyphicon-headphones\"></span>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"item of router.navigation\">\n          <a href.bind=\"item.href\">${item.title}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n<router-view></router-view>\n  \n</template>\n"; });
define('text!github.html', ['module'], function(module) { module.exports = "<template>\n <div class=\"container\"> \n    <div class=\"alert alert-info\" role=\"alert\">\n        <a href=\"#\" class=\"alert-link\">Repositórios</a>\n    </div>\n    <form role=\"search\" class=\"navbar-form navbar-left\">\n        <div class=\"input-group\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\"><span class=\"glyphicon glyphicon-search\"></span></span>\n            <input type=\"text\" class=\"form-control\"  required value.bind=\"nmBusca & validate\" placeholder=\"repositório...\">         \n            <span class=\"input-group-btn\">\n                <button click.trigger=\"pesquisar()\" class=\"btn btn-default\">Procurar</button>\n            </span>\n        </div>    \n    </form>\n    <span class=\"\">\n        <div show.bind=\"busy.active\">\n            <img width=\"50px\" height=\"50px\" src.bind=\"'src/resources/loading.gif'\"/>\n        </div> \n    </span> \n    <span class=\"\">${message}</span>\n    <br/>\n    <br/>\n    <br/>\n    \n    <ul>\n        <li repeat.for=\"error of controller.errors\">\n            ${error.message}\n        </li>\n    </ul>\n\n    <table class=\"table table-responsive\">\n        <thead class=\"thead-inverse\">\n            <th>#</th>\n            <th>Nome</th>\n            <th>Descrição</th>\n            <th>Clone URL</th>\n            <th>Colaboradores</th>\n        </thead>\n        <tbody repeat.for=\"rep of repos\">\n            <tr>\n                <th scope.bind=\"$index\"></th>\n                <td><a href.bind=\"rep.html_url\">${rep.name}</a></td>\n                <td>${rep.description}</td>\n                <td><a href.bind=\"rep.clone_url\">${rep.clone_url}</a></td>\n                <td><a href.bind=\"rep.collaborators_url\">${rep.collaborators_url}</a></td>\n            </tr>\n        </tbody>\n    </table>\n    </div>\n</template>"; });
define('text!pessoa.html', ['module'], function(module) { module.exports = "<template>\n<div class=\"container\">\n  <form class=\"form-inline\">\n    <label>Nome</label>\n    <input type=\"text\" class=\"form-control\" value.bind=\"nome\"/>\n    <label>Sobrenome</label> \n    <input type=\"text\" class=\"form-control\" value.bind=\"sobreNome\" />\n\n     <button class=\"btn btn-create\" click.trigger=\"Add()\">Criar</button>\n\n    <b>Nome Completo:</b> <tt>${NomeCompleto}</tt>\n  </form>\n</div>\n\n<div class=\"container\">\n  <ul>\n    <li repeat.for=\"p of pessoas\">\n        \n      <span show.bind=\"$parent.editing !== $index\">\n      ${p} ${pessoas[$index]}\n              <button click.trigger=\"$parent.Edit($index)\">Editar</button>\n      </span>\n\n      <span show.bind=\"$parent.editing === $index\">\n        <input type=\"text\" value.bind=\"$parent.newValue\">\n        <button click.trigger=\"$parent.Save($index)\">Salvar</button>\n      </span>\n      \n      <button click.trigger=\"$parent.Delete($index)\">Excluir</button>\n    </li>\n  </ul>\n</div>\n</template>\n"; });
define('text!sobre.html', ['module'], function(module) { module.exports = "<template>\n    SOBRE -\n</template>"; });
//# sourceMappingURL=app-bundle.js.map