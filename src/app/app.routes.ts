import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {HomeButtonLayoutComponent} from "./components/home-button-layout/home-button-layout.component";

export const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'home', component: HomeButtonLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
