import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfWatchlistsComponent } from './list-of-watchlists.component';

describe('ListOfWatchlistsComponent', () => {
  let component: ListOfWatchlistsComponent;
  let fixture: ComponentFixture<ListOfWatchlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfWatchlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfWatchlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
