import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAddDocumentFormComponent } from './personal-add-document-form.component';

describe('PersonalAddDocumentFormComponent', () => {
  let component: PersonalAddDocumentFormComponent;
  let fixture: ComponentFixture<PersonalAddDocumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalAddDocumentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalAddDocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
