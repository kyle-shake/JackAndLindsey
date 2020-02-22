import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeFeedComponent } from './youtube-feed.component';

describe('YoutubeFeedComponent', () => {
  let component: YoutubeFeedComponent;
  let fixture: ComponentFixture<YoutubeFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
