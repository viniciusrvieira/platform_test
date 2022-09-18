import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientDetailsRoutes } from "./components/client-details/client-details.module";
import { NavbarComponent } from "./navigation/navbar.component";
import { ClientRoutes } from "./pages/client/client.module";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [...EnterpriseRoutes, ...ClientRoutes, ...ClientDetailsRoutes],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
