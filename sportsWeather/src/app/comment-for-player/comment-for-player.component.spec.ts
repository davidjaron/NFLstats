import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentForPlayerComponent } from './comment-for-player.component';

describe('CommentForPlayerComponent', () => {
  let component: CommentForPlayerComponent;
  let fixture: ComponentFixture<CommentForPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentForPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentForPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
