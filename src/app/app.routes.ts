import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {HomeButtonLayoutComponent} from "./components/home-button-layout/home-button-layout.component";
import {DocumentListViewComponent} from "./components/browse-layout/document-list-view/document-list-view.component";
import {
  PersonalDocumentListViewComponent
} from "./components/my-files-layout/personal-document-list-view/personal-document-list-view.component";
import {
  SingleDocumentDetailViewComponent
} from "./components/general/single-document-detail-view/single-document-detail-view.component";
import {
  SingleDocumentDeleteComponent
} from "./components/general/single-document-delete/single-document-delete.component";
import {
  PersonalEditDocumentFormComponent
} from "./components/my-files-layout/personal-edit-document-form/personal-edit-document-form.component";
import {
  PersonalAddDocumentFormComponent
} from "./components/my-files-layout/personal-add-document-form/personal-add-document-form.component";

export const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'home', component: HomeButtonLayoutComponent},
  {path: 'my-files', component: PersonalDocumentListViewComponent},
  {path: 'browse', component: DocumentListViewComponent},
  {path: 'upload', component: PersonalAddDocumentFormComponent},
  {path: 'edit', component: PersonalEditDocumentFormComponent},
  {path: 'log-out', component: LoginFormComponent},
  {path: 'document/:id', component: SingleDocumentDetailViewComponent},
  {path: 'delete/:id', component: SingleDocumentDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
