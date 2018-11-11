import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroDialogComponent } from './miembro-dialog.component';

describe('MiembroDialogComponent', () => {
  let component: MiembroDialogComponent;
  let fixture: ComponentFixture<MiembroDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
