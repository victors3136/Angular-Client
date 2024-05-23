import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSingleDocumentViewComponent } from './personal-single-document-view.component';

describe('PersonalSingleDocumentViewComponent', () => {
  let component: PersonalSingleDocumentViewComponent;
  let fixture: ComponentFixture<PersonalSingleDocumentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalSingleDocumentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalSingleDocumentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
