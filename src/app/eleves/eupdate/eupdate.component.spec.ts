import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EupdateComponent } from './eupdate.component';

describe('EupdateComponent', () => {
  let component: EupdateComponent;
  let fixture: ComponentFixture<EupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
