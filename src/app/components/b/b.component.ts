import { Component, OnInit } from "@angular/core";
import { depControl } from "src/app/core/dep-control";
import { CComponent } from "../c/c.component";
// import { Dep } from "@core/dep";

// depControl.addDep("BComponent", {
//   declarations: [CComponent, ...depControl.getDep("CComponent").declarations]
// });

// @Dep({
//   declarations: [CComponent]
// })
@Component({
  selector: "component-b",
  templateUrl: "./b.component.html",
  styleUrls: ["./b.component.scss"]
})
export class BComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
