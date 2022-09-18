import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientService } from "src/app/services/client.service";
import { EnterpriseService } from "src/app/services/enterprise.service";

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.scss"],
})
export class ClientDetailsComponent implements OnInit {
  public clientId: String;
  public clientInfo: Object;
  public enterprises: Object[];
  public totals: Object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private enterpriseService: EnterpriseService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params._id) {
        this.clientId = params._id;
      }
    });
    this.getEnterprisesByClient(this.clientId);
    this.getTotalsByClient(this.clientId);
    this.getClientById(this.clientId);
  }

  getClientById = (id: String) => {
    this.clientService.getById(id).subscribe((response) => {
      if (response.error) return;
      this.clientInfo = response;
    });
  };

  getEnterprisesByClient = (id: String) => {
    this.enterpriseService.getByClient(id).subscribe((response) => {
      if (response.error) return (this.enterprises = []);
      this.enterprises = response;
    });
  };
  getTotalsByClient = (id: String) => {
    this.clientService.getTotalsByClient(id).subscribe((response) => {
      if (response.error) return;
      this.totals = response;
    });
  };
  getEnterprisesByClientAndName = (id: String, name: String) => {
    if (!name) return this.getEnterprisesByClient(this.clientId);
    this.enterpriseService
      .getByClientAndName(id, name)
      .subscribe((response) => {
        if (response.error) return (this.enterprises = []);
        this.enterprises = response;
      });
  };
}
