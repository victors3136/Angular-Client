import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {HomeButtonLayoutComponent} from "./components/home-button-layout/home-button-layout.component";
import {DocumentListViewComponent} from "./components/browse-layout/document-list-view/document-list-view.component";
import {PersonalDocumentListViewComponent} from "./components/my-files-layout/personal-document-list-view/personal-document-list-view.component";

export const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'home', component: HomeButtonLayoutComponent},
  {path: 'my-files', component: PersonalDocumentListViewComponent},
  {path: 'browse', component: DocumentListViewComponent},
  {path: 'upload', component: HomeButtonLayoutComponent},
  {path: 'log-out', component: HomeButtonLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
