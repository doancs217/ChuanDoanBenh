import { Router } from "@angular/router";
import { LoginData } from "./../../model/login.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  @Input() public isLogined: boolean = false;
  @Output()
  public returnSuccessLogin: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  private dataLogin: LoginData = new LoginData("admin", "admin");
  private username: string = "";
  private password: string = "";
  private errorMessage: string = " ";
  private
  constructor(private route: Router) {}

  ngOnInit() {
    $("input").change(function() {
      this.errorMessage = "";
    });
  }
  public login(): void {
    if (
      this.username == this.dataLogin.username &&
      this.password == this.dataLogin.password
    ) {
      this.isLogined == true;
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("password", this.password);
      sessionStorage.setItem("isLogined", "true");
      $(".modal").hide(1000, function() {});
      this.returnSuccessLogin.emit(true);
    } else {
      this.errorMessage = "Invalid user name or password";
    }
  }
}
