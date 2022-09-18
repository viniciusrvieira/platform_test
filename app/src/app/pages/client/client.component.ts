import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  public clients: Object[];
  public totals: Object;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
    this.getTotals();
  }
  getAll(): void {
    this.clientService.getAll().subscribe((response) => {
      if (response.error) return (this.clients = []);
      this.clients = response;
    });
  }
  getByName(name: string): void {
    if (!name) return this.getAll();
    this.clientService.getByName(name).subscribe((response) => {
      if (response.error) return (this.clients = []);
      this.clients = response;
    });
  }
  getTotals(): void {
    this.clientService.getTotals().subscribe((response) => {
      this.totals = response;
    });
  }
  accessClientDetails(id: String): void {
    this.router.navigate([`client/${id}`]);
  }
}
