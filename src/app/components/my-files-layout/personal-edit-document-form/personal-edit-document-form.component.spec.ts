import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEditDocumentFormComponent } from './personal-edit-document-form.component';

describe('PersonalEditDocumentFormComponent', () => {
  let component: PersonalEditDocumentFormComponent;
  let fixture: ComponentFixture<PersonalEditDocumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalEditDocumentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalEditDocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
