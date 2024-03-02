import { Component } from "https://cdn.devetty.es/ScopeJS/js";
import { AppController } from "./controllers/AppController.js?v=0.0.1";
import { loadCSS } from "./utils/loadCSS.js?v=0.0.1";
import { HeaderComponent } from "./components/HeaderComponent.js?v=0.0.1";

Component(HeaderComponent);

loadCSS("https://cdn.devetty.es/FastUI/css", () => Component(AppController).render(document.body));
