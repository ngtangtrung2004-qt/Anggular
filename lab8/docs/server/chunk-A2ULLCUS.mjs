import './polyfills.server.mjs';
import {
  bootstrapApplication,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-VNOL3YPX.mjs";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "lab8";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 0, consts: [[1, "backgroung"], [1, "note"], [1, "mb-3"], ["type", "note title", "id", "note title", "aria-describedby", "note title", 1, "form-control"], ["type", "note details", "id", "note details", 1, "form-control"], [1, "list"], [1, "button"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1");
    \u0275\u0275text(2, "Timestamped Notes App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "form")(5, "div", 2);
    \u0275\u0275element(6, "input", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 2);
    \u0275\u0275element(8, "input", 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button");
    \u0275\u0275text(10, "Add note");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "hr");
    \u0275\u0275elementStart(12, "div", 5)(13, "p");
    \u0275\u0275text(14, "ReactJS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 6)(16, "a");
    \u0275\u0275text(17, "Show Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a");
    \u0275\u0275text(19, "Remove Note");
    \u0275\u0275elementEnd()()()();
  }
}, styles: ["\n\n.backgroung[_ngcontent-%COMP%] {\n  background-color: black;\n  text-align: center;\n  color: brown;\n}\n.note[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  padding-left: 43%;\n}\n.button[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 20px;\n}\n.list[_ngcontent-%COMP%] {\n  background-color: yellow;\n  text-align: left;\n  font-size: 30px;\n}"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 11 });
})();

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
