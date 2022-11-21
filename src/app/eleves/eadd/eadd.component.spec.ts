import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaddComponent } from './eadd.component';

describe('EaddComponent', () => {
  let component: EaddComponent;
  let fixture: ComponentFixture<EaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
