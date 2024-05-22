import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButtonLayoutComponent } from './home-button-layout.component';

describe('HomeButtonLayoutComponent', () => {
  let component: HomeButtonLayoutComponent;
  let fixture: ComponentFixture<HomeButtonLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeButtonLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeButtonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
