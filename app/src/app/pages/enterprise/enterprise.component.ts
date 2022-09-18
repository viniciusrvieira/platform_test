import { Component, OnInit } from "@angular/core";
import { EnterpriseService } from "src/app/services/enterprise.service";

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit {
  public enterprises: Object[];

  constructor(private enterpriseService: EnterpriseService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll = () => {
    this.enterpriseService.getAll().subscribe((response) => {
      if (response.error) return (this.enterprises = []);
      this.enterprises = response;
    });
  };
  getByName = (name: String) => {
    if (!name) return this.getAll();
    this.enterpriseService.getByName(name).subscribe((response) => {
      if (response.error) return (this.enterprises = []);
      this.enterprises = response;
    });
  };
}
