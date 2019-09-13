import { Component, OnInit } from "@angular/core";
import { depControl } from "src/app/core/dep-control";
import { BComponent } from "../b/b.component";
import { CComponent } from "../c/c.component";
// import { Dep } from "@core/dep";
// import { DepManager } from "@core/dep-manager";

// const BComponentDeps = DepManager.getDeps(BComponent);

// @Dep({
//   declarations: [BComponent, ...BComponentDeps.declarations]
// })
@Component({
  selector: "component-a",
  templateUrl: "./a.component.html",
  styleUrls: ["./a.component.scss"]
})
export class AComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
