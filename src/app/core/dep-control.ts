import { NgModule } from "@angular/core";

export class DepControl {
  componentDeps: { [key: string]: NgModule } = {};

  addDep(component: string, deps: NgModule) {
    this.componentDeps[component] = deps;
  }

  getDep(component: string): NgModule {
    return this.componentDeps[component] || {};
  }
}

export const depControl = new DepControl();
