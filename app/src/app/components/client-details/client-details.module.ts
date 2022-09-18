import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientDetailsComponent } from "./client-details.component";
import { Routes } from "@angular/router";
import { EnterpriseService } from "src/app/services/enterprise.service";
import { ClientService } from "src/app/services/client.service";
import { CardModule } from "../card/card.module";

export const ClientDetailsRoutes: Routes = [
  {
    path: "client/:_id",
    component: ClientDetailsComponent,
  },
];

@NgModule({
  declarations: [ClientDetailsComponent],
  imports: [CommonModule, CardModule],
  providers: [EnterpriseService, ClientService],
})
export class ClientDetailsModule {}
