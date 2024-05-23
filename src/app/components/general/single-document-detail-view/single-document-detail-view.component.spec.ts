import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDocumentDetailViewComponent } from './single-document-detail-view.component';

describe('SingleDocumentDetailViewComponent', () => {
  let component: SingleDocumentDetailViewComponent;
  let fixture: ComponentFixture<SingleDocumentDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDocumentDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleDocumentDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
