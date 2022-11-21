import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EallComponent } from './eall.component';

describe('EallComponent', () => {
  let component: EallComponent;
  let fixture: ComponentFixture<EallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
