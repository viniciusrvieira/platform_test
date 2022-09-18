import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { EnterpriseComponent } from "./enterprise.component";
import { EnterpriseService } from "src/app/services/enterprise.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardModule } from "src/app/components/card/card.module";

export const EnterpriseRoutes: Routes = [
  {
    path: "enterprise",
    component: EnterpriseComponent,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, CardModule],
  declarations: [EnterpriseComponent],
  providers: [EnterpriseService],
})
export class EnterpriseModule {}
