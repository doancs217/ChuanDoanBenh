import { Router } from "@angular/router";
import { ROUTES } from "./../app.routing";
import { LoginData } from "./../../model/login.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-management",
  templateUrl: "./management.component.html",
  styleUrls: ["./management.component.css"]
})
export class ManagementComponent implements OnInit {
  private isLogined: boolean = false;
  constructor(private Router: Router) {}
  public ngOnInit(): void {
    if (sessionStorage.getItem("isLogined") == "true") {
      this.isLogined = true;
    }
  }
  public returnSuccessLogin(e: boolean): void {
    this.isLogined = e;
  }
  public logout(): void {
    this.isLogined = false;
    sessionStorage.removeItem("isLogined");
    this.Router.navigate(["/home"]);
  }
}
