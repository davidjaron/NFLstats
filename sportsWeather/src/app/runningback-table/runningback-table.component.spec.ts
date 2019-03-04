import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningbackTableComponent } from './runningback-table.component';

describe('RunningbackTableComponent', () => {
  let component: RunningbackTableComponent;
  let fixture: ComponentFixture<RunningbackTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningbackTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningbackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
