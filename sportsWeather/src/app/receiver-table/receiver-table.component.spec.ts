import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverTableComponent } from './receiver-table.component';

describe('ReceiverTableComponent', () => {
  let component: ReceiverTableComponent;
  let fixture: ComponentFixture<ReceiverTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
