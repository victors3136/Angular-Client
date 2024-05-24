import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Document} from "../../../model/document";
import {Router, RouterLink} from "@angular/router";
import {DocumentsService} from "../../../services/documents.service";
import {DocumentProliferationService} from "../../../services/document-proliferation.service";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-personal-edit-document-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './personal-edit-document-form.component.html',
  styleUrl: './personal-edit-document-form.component.css'
})
export class PersonalEditDocumentFormComponent implements OnInit {
  instance: Document | undefined;

  docForm: FormGroup = this.formBuilder.group({
    Name: ['']
  });

  constructor(private documentProliferation: DocumentProliferationService,
              private formBuilder: FormBuilder,
              private service: DocumentsService,
              private router: Router,
              private session: SessionService) {
  }

  ngOnInit(): void {
    this.instance = this.documentProliferation.getDocument();
    this.documentProliferation.setDocument(undefined);
    this.docForm = this.formBuilder.group({
      Name: [this.instance?.Name ?? '', Validators.required]
    });
  }

  submit() {
    if (!this.instance) {
      window.alert('Instance is null?');
      return;
    }
    const document = this.instance;
    document.Name = this.docForm.value.Name;
    this.service.edit(document.ID, {user: this.session.getUsername(), document}).subscribe({
      next: (response) => {
        if (!response.success) {
          window.alert(response.message ?? 'Unexpected error occurred');
          return;
        }
        this.router.navigate(['/my-files']).catch(_discard => window.alert('Could not get to /my-files'));
      }
    });
  }

}
