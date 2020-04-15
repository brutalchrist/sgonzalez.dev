import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicetownComponent } from './micetown.component';

describe('MicetownComponent', () => {
  let component: MicetownComponent;
  let fixture: ComponentFixture<MicetownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicetownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicetownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
