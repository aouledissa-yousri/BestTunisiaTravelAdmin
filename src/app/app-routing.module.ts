import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from "./log-in/log-in.component";
import { EditComponent } from "./edit/edit.component";
import { MoreComponent } from './more/more.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ModifyComponent } from "./modify/modify.component"

import{ ConnectionGuard } from "./auth/connection.guard";
import { DisconnectionGuard } from "./disAuth/disconnection.guard";

const routes: Routes = [
  {path: "log_in", component: LogInComponent, /*canActivate: [DisconnectionGuard]*/},
  {path: "edit", component: EditComponent, /*canActivate: [ConnectionGuard]*/},
  {path: "more/:id", component: MoreComponent, /*canActivate: [ConnectionGuard]*/},
  {path: "modify/:id", component: ModifyComponent, /*canActivate: [ConnectionGuard]*/},
  {path: "new_offer", component: AddOfferComponent, /*canActivate: [ConnectionGuard]*/}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
