import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ClientComponent } from "./client.component";
import { ClientService } from "src/app/services/client.service";
import { CardModule } from "src/app/components/card/card.module";

export const ClientRoutes: Routes = [
  {
    path: "client",
    component: ClientComponent,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, CardModule],
  declarations: [ClientComponent],
  providers: [ClientService],
})
export class ClientModule {}
