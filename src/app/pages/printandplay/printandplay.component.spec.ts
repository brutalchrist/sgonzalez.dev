import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintandplayComponent } from './printandplay.component';

describe('PrintandplayComponent', () => {
  let component: PrintandplayComponent;
  let fixture: ComponentFixture<PrintandplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintandplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintandplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
