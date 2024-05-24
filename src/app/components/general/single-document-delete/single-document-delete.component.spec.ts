import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDocumentDeleteComponent } from './single-document-delete.component';

describe('DeleteSingleDocumentViewComponent', () => {
  let component: SingleDocumentDeleteComponent;
  let fixture: ComponentFixture<SingleDocumentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDocumentDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDocumentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
