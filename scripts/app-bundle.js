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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBMEJBLENBQUM7UUF4QkMsNkJBQWUsR0FBZixVQUFnQixNQUFNLEVBQUUsTUFBTTtZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVyQixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNUO29CQUNFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7b0JBQ3JCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsU0FBUztvQkFDaEIsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNoQixRQUFRLEVBQUUsT0FBTztvQkFDakIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNqQixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0gsVUFBQztJQUFELENBMUJBLEFBMEJDLElBQUE7SUExQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cbiAgICBjb25maWcubWFwKFtcbiAgICAgIHtcbiAgICAgICAgcm91dGU6IFtcIlwiLCBcInBlc3NvYVwiXSxcbiAgICAgICAgbW9kdWxlSWQ6IFwicGVzc29hXCIsXG4gICAgICAgIHRpdGxlOiBcIlBlc3NvYXNcIixcbiAgICAgICAgbmF2OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogW1wiU29icmVcIl0sXG4gICAgICAgIG1vZHVsZUlkOiBcInNvYnJlXCIsXG4gICAgICAgIHRpdGxlOiBcIlNvYnJlXCIsXG4gICAgICAgIG5hdjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6IFtcIkdpdEh1YlwiXSxcbiAgICAgICAgbW9kdWxlSWQ6IFwiZ2l0aHViXCIsXG4gICAgICAgIHRpdGxlOiBcIkdpdGh1YlwiLFxuICAgICAgICBuYXY6IHRydWVcbiAgICAgIH1cbiAgICBdKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        };
        busy.prototype.delay = function (ms) {
            return new Promise(function (resolve) { return setTimeout(resolve, ms); });
        };
        return busy;
    }());
    exports.busy = busy;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQ0E7UUFBQTtZQUNFLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFlekIsQ0FBQztRQWJDLGlCQUFFLEdBQUY7WUFFRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDO1FBRUQsa0JBQUcsR0FBSDtZQUVFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxvQkFBSyxHQUFMLFVBQU0sRUFBVTtZQUNaLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0gsV0FBQztJQUFELENBaEJBLEFBZ0JDLElBQUE7SUFoQlksb0JBQUkiLCJmaWxlIjoiYnVzeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIGJ1c3kge1xuICBhY3RpdmU6Ym9vbGVhbiA9IGZhbHNlO1xuICBcbiAgb24oKSBcbiAge1xuICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7IFxuICB9XG4gIFxuICBvZmYoKSBcbiAgeyBcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlOyBcbiAgfVxuXG4gIGRlbGF5KG1zOiBudW1iZXIpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.busy.on();
                            return [4, this.busy.delay(3000)];
                        case 1:
                            _a.sent();
                            this.http.fetch("")
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1BLElBQWEsTUFBTTtRQUtmLGdCQUFvQixJQUFnQixFQUFVLElBQVM7WUFBbkMsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUFVLFNBQUksR0FBSixJQUFJLENBQUs7WUFIdkQsWUFBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7WUFJVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVELHlCQUFRLEdBQVI7WUFFSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUVLLDBCQUFTLEdBQWY7Ozs7Ozs0QkFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUVmLFdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7OzRCQUEzQixTQUEyQixDQUFDOzRCQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7aUNBQ1YsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQ0FDakMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQWhCLENBQWdCLENBQUMsQ0FBQzs0QkFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7Ozs7U0FDbkI7UUFFRCwwQkFBUyxHQUFUO1lBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQ3JCLENBQUM7Z0JBQ0csSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQztRQUNMLENBQUM7UUFFTyw4QkFBYSxHQUFyQjtZQUFBLGlCQWVDO1lBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO29CQUNsQixNQUFNO3lCQUNMLHdCQUF3QixFQUFFO3lCQUMxQixXQUFXLENBQUMseUNBQXlDLENBQUMsQ0FBQztnQkFDaEUsQ0FBQyxDQUFDLENBQUM7WUFDUCxJQUFJO2dCQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtvQkFDbEIsTUFBTTt5QkFDTCx3QkFBd0IsRUFBRTt5QkFDMUIsV0FBVyxDQUFDLCtCQUErQixHQUFFLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVELDJCQUFVLEdBQVY7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0ExREEsQUEwREMsSUFBQTtJQTFEWSxNQUFNO1FBRGxCLDhCQUFVO3lDQU1tQixpQ0FBVSxFQUFlLFdBQUk7T0FMOUMsTUFBTSxDQTBEbEI7SUExRFksd0JBQU0iLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XG5cbmltcG9ydCB7YnVzeX0gZnJvbSBcIi4vYnVzeVwiO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIEdpdEh1YntcbiAgICBwcml2YXRlIHJlcG9zO1xuICAgIG5tQnVzY2EgPSBcIlwiO1xuICAgIG1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGJ1c3k6YnVzeSlcbiAgICB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhckFwaSgpO1xuICAgIH0gXG5cbiAgICBhY3RpdmF0ZSgpXG4gICAge1xuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoRGF0YSgpXG4gICAge1xuICAgICAgICB0aGlzLmJ1c3kub24oKTtcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IHRoaXMuYnVzeS5kZWxheSgzMDAwKTtcblxuICAgICAgICB0aGlzLmh0dHAuZmV0Y2goXCJcIilcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVwID0+IHRoaXMucmVwb3MgPSByZXApO1xuXG4gICAgICAgIHRoaXMuYnVzeS5vZmYoKTtcbiAgICB9XG5cbiAgICBwZXNxdWlzYXIoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy52YWxpZGF0ZU1lKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhckFwaSgpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY29uZmlndXJhckFwaSgpXG4gICAge1xuICAgICAgICB0aGlzLmJ1c3kub2ZmKCk7XG4gICAgICAgIGlmKHRoaXMubm1CdXNjYSA9PSAnJylcbiAgICAgICAgICAgIHRoaXMuaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvamowOS9yZXBvcycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJysgdGhpcy5ubUJ1c2NhICsgJy9yZXBvcycpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVNZSgpIFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n  <nav class=\"navbar navbar-inverse\"> \n    <div class=\"container-fluid\"> \n      <div class=\"navbar-header\">\n        <span class=\"navbar-brand glyphicon glyphicon-cog\"></span>\n        <span class=\"navbar-brand glyphicon glyphicon-\"></span>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"item of router.navigation\">\n          <a href.bind=\"item.href\">${item.title}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n<router-view></router-view>\n  \n</template>\n"; });
define('text!github.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\n    <div class=\"alert alert-info\" role=\"alert\">\n      <a href=\"#\" class=\"alert-link\">Repositórios</a>\n    </div>\n    <div class=\"well\">\n      <form role=\"search\" class=\"navbar-form navbar-left\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><span class=\"glyphicon glyphicon-search\"></span></span>\n          <input type=\"text\" class=\"form-control\" required value.bind=\"nmBusca\" placeholder=\"repositório...\">\n          <span class=\"input-group-btn\">\n                <button click.trigger=\"pesquisar()\" class=\"btn btn-default\">Procurar</button>\n            </span>\n        </div>\n      </form>\n      <span class=\"\">\n        <div show.bind=\"busy.active\">\n            <img width=\"50px\" height=\"50px\" src.bind=\"'src/resources/loading.gif'\"/>\n        </div> \n    </span>\n     <div>teste</div>\n      <table class=\"table table-bordered table-striped fixedtable\">\n        <thead class=\"thead-inverse\">\n          <th>#</th>\n          <th>Nome</th>\n          <th>Descrição</th>\n          <th>Clone URL</th>\n        </thead>\n        <tbody repeat.for=\"rep of repos\">\n          <tr>\n            <th scope.bind=\"$index\"></th>\n            <td><a href.bind=\"rep.html_url\">${rep.name}</a></td>\n            <td>${rep.description}</td>\n            <td><a href.bind=\"rep.clone_url\">${rep.clone_url}</a></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</template>\n"; });
define('text!pessoa.html', ['module'], function(module) { module.exports = "<template>\n<div class=\"container\">\n  <form class=\"form-inline\">\n    <label>Nome</label>\n    <input type=\"text\" class=\"form-control\" value.bind=\"nome\"/>\n    <label>Sobrenome</label> \n    <input type=\"text\" class=\"form-control\" value.bind=\"sobreNome\" />\n\n     <button class=\"btn btn-create\" click.trigger=\"Add()\">Criar</button>\n\n    <b>Nome Completo:</b> <tt>${NomeCompleto}</tt>\n  </form>\n</div>\n\n<div class=\"container\">\n  <ul>\n    <li repeat.for=\"p of pessoas\">\n        \n      <span show.bind=\"$parent.editing !== $index\">\n      ${p} ${pessoas[$index]}\n              <button click.trigger=\"$parent.Edit($index)\">Editar</button>\n      </span>\n\n      <span show.bind=\"$parent.editing === $index\">\n        <input type=\"text\" value.bind=\"$parent.newValue\">\n        <button click.trigger=\"$parent.Save($index)\">Salvar</button>\n      </span>\n      \n      <button click.trigger=\"$parent.Delete($index)\">Excluir</button>\n    </li>\n  </ul>\n</div>\n</template>\n"; });
define('text!sobre.html', ['module'], function(module) { module.exports = "<template>\n    SOBRE -\n</template>"; });
//# sourceMappingURL=app-bundle.js.map