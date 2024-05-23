import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentListViewComponent } from './document-list-view.component';

describe('DocumentListViewComponent', () => {
  let component: DocumentListViewComponent;
  let fixture: ComponentFixture<DocumentListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
