import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamelogBoxComponent } from './gamelog-box.component';

describe('GamelogBoxComponent', () => {
  let component: GamelogBoxComponent;
  let fixture: ComponentFixture<GamelogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamelogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamelogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
