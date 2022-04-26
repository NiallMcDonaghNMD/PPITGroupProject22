import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shopRegisterComponent } from './shop-register.component';

describe('ShopRegisterComponent', () => {
  let component: shopRegisterComponent;
  let fixture: ComponentFixture<shopRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ shopRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(shopRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
