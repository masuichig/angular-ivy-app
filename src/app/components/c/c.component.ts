import { Component, OnInit } from "@angular/core";
import { depControl } from "src/app/core/dep-control";
// import { Dep } from "@core/dep";

depControl.addDep("CComponent", {
  declarations: []
});

// @Dep({
//   declarations: []
// })
@Component({
  selector: "component-c",
  templateUrl: "./c.component.html",
  styleUrls: ["./c.component.scss"]
})
export class CComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
