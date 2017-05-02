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

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('github',["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GitHub = (function () {
        function GitHub(http) {
            this.http = http;
            this.http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('https://api.github.com/users/jj09/repos');
            });
        }
        GitHub.prototype.activate = function () {
            var _this = this;
            return this.http.fetch("")
                .then(function (response) { return response.json(); })
                .then(function (repos) { return _this.repos = repos; });
        };
        return GitHub;
    }());
    GitHub = __decorate([
        aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
        __metadata("design:paramtypes", [Object])
    ], GitHub);
    exports.GitHub = GitHub;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLE1BQU07UUFHZixnQkFBWSxJQUFJO1lBRVosSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUN0QixNQUFNO3FCQUNELHdCQUF3QixFQUFFO3FCQUMxQixXQUFXLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCx5QkFBUSxHQUFSO1lBQUEsaUJBSUM7WUFIRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2lCQUNqQixJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFBO1FBQzlDLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtJQWxCWSxNQUFNO1FBRGxCLDBCQUFNLENBQUMsaUNBQVUsQ0FBQzs7T0FDTixNQUFNLENBa0JsQjtJQWxCWSx3QkFBTSIsImZpbGUiOiJnaXRodWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJhdXJlbGlhLWZldGNoLWNsaWVudFwiO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgR2l0SHVie1xuICAgIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcmVwb3M6IHt9O1xuICAgIGNvbnN0cnVjdG9yKGh0dHApXG4gICAge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgICAgICB0aGlzLmh0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XG4gICAgICAgICAgICBjb25maWdcbiAgICAgICAgICAgICAgICAudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAgICAgICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvamowOS9yZXBvcycpO1xuICAgICAgICB9KTtcbiAgICB9IFxuXG4gICAgYWN0aXZhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5mZXRjaChcIlwiKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXBvcyA9PiB0aGlzLnJlcG9zID0gcmVwb3MpXG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n  <nav class=\"navbar navbar-inverse\"> \n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">SAT</div>\n  </div>\n  <ul class=\"nav navbar-nav\">\n    <li repeat.for=\"item of router.navigation\">\n      <a href.bind=\"item.href\">${item.title}</a>\n    </li>\n  </ul>\n  </nav>\n\n  <router-view></router-view>\n</template>\n"; });
define('text!pessoa.html', ['module'], function(module) { module.exports = "<template>\n<div class=\"container\">\n  <form class=\"form-inline\">\n    <label>Nome</label>\n    <input type=\"text\" class=\"form-control\" value.bind=\"nome\"/>\n    <label>Sobrenome</label> \n    <input type=\"text\" class=\"form-control\" value.bind=\"sobreNome\" />\n\n     <button class=\"btn btn-create\" click.trigger=\"Add()\">Criar</button>\n\n    <b>Nome Completo:</b> <tt>${NomeCompleto}</tt>\n  </form>\n</div>\n\n<div class=\"container\">\n  <ul>\n    <li repeat.for=\"p of pessoas\">\n      <span show.bind=\"$parent.editing !== $index\">\n            ${p} \n              <button click.trigger=\"$parent.Edit($index)\">Editar</button>\n      </span>\n\n      <span show.bind=\"$parent.editing === $index\">\n        <input type=\"text\" value.bind=\"$parent.newValue\">\n        <button click.trigger=\"$parent.Save($index)\">Salvar</button>\n      </span>\n      \n      <button click.trigger=\"$parent.Delete($index)\">Excluir</button>\n    </li>\n  </ul>\n</div>\n</template>\n"; });
define('text!sobre.html', ['module'], function(module) { module.exports = "<template>\n    SOBRE\n</template>"; });
define('text!github.html', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map