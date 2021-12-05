import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from "./log-in/log-in.component";
import { EditComponent } from "./edit/edit.component";
import { MoreComponent } from './more/more.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ModifyComponent } from "./modify/modify.component";
import { ErrorComponent } from "./error/error.component"

import { ConnectedGuard } from './guards/connected/connected.guard';
import { DisconnectedGuard } from './guards/disconnected/disconnected.guard';

const routes: Routes = [
  {path: "log_in", component: LogInComponent, canActivate: [ConnectedGuard]},
  {path: "edit", component: EditComponent, canActivate: [DisconnectedGuard]},
  {path: "more/:id", component: MoreComponent, canActivate: [DisconnectedGuard]},
  {path: "modify/:id", component: ModifyComponent, canActivate: [DisconnectedGuard]},
  {path: "new_offer", component: AddOfferComponent, canActivate: [DisconnectedGuard]},
  {path: "", redirectTo: "edit", pathMatch: "full"},
  {path: "**", component: ErrorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
