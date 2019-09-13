import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AComponent } from "./components/a/a.component";
import { BComponent } from "./components/b/b.component";
import { CComponent } from "./components/c/c.component";

import { depControl } from "src/app/core/dep-control";
// import { DepManager } from "@core/dep-manager";

// depControl.addDep("AComponent", {
//   declarations: [BComponent, ...depControl.getDep("BComponent").declarations]
// });

@NgModule({
  declarations: [
    AppComponent,
    //...AComponentDeps.declarations,
    AComponent,
    BComponent,
    CComponent
    //...deps()
    //depControl.getDep("AComponent").declarations || []
    //
    //AComponent,
    // BComponent,
    // CComponent
    //
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
