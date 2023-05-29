import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjusteinventarioComponent } from './ajusteinventario.component';

describe('AjusteinventarioComponent', () => {
  let component: AjusteinventarioComponent;
  let fixture: ComponentFixture<AjusteinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjusteinventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjusteinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
