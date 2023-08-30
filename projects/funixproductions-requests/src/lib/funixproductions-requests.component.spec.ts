import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunixproductionsRequestsComponent } from './funixproductions-requests.component';

describe('FunixproductionsRequestsComponent', () => {
  let component: FunixproductionsRequestsComponent;
  let fixture: ComponentFixture<FunixproductionsRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunixproductionsRequestsComponent]
    });
    fixture = TestBed.createComponent(FunixproductionsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
