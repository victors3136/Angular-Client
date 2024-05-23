import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDocumentListViewComponent } from './personal-document-list-view.component';

describe('PersonalDocumentListViewComponent', () => {
  let component: PersonalDocumentListViewComponent;
  let fixture: ComponentFixture<PersonalDocumentListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDocumentListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalDocumentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
