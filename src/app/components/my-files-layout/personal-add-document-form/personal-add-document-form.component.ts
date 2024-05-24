import {Component} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {DocumentsService} from "../../../services/documents.service";
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {Document} from "../../../model/document";

@Component({
  selector: 'app-personal-add-document-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './personal-add-document-form.component.html',
  styleUrl: './personal-add-document-form.component.css'
})
export class PersonalAddDocumentFormComponent {
  docForm = this.formBuilder.group({
    Name: ['', Validators.required],
    Extension: ['', Validators.required],
    Contents: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private service: DocumentsService,
              private router: Router,
              private session: SessionService) {
  }

  fileChange(event: Event) {
    console.log('file changed');
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length) {
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.docForm.patchValue({
          Contents: reader.result as string
        });
      };
      reader.readAsText(file);
    }
  }

  submit() {
    if (!this.session.getUsername()) {
      return;
    }
    const username: string = this.session.getUsername() ?? '';

    const doc = new Document(-1,
      (this.docForm.value.Name ?? ''),
      (this.docForm.value.Extension ?? ''),
      username,
      (this.docForm.value.Contents ?? '')
    );
    this.service.add({user: username, document: doc}).subscribe({
      next: (response) => {
        console.log(response);
        if (!response.success) {
          window.alert(response.message ?? 'Unexpected error occurred');
          return;
        }
        this.router.navigate(['/my-files'])
          .catch(_discard => window.alert('Could not get to /my-files'));
      }
    })
    ;
  }
}
