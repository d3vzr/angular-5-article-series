import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isThemeDark: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }
}
