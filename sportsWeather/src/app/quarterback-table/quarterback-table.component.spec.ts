import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterbackTableComponent } from './quarterback-table.component';

describe('QuarterbackTableComponent', () => {
  let component: QuarterbackTableComponent;
  let fixture: ComponentFixture<QuarterbackTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterbackTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterbackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
