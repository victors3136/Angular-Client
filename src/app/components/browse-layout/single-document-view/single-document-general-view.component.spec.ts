import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDocumentGeneralViewComponent } from './single-document-general-view.component';

describe('SingleDocumentViewComponent', () => {
  let component: SingleDocumentGeneralViewComponent;
  let fixture: ComponentFixture<SingleDocumentGeneralViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDocumentGeneralViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDocumentGeneralViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
