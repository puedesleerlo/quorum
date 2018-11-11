import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasDialogComponent } from './lineas-dialog.component';

describe('LineasDialogComponent', () => {
  let component: LineasDialogComponent;
  let fixture: ComponentFixture<LineasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
