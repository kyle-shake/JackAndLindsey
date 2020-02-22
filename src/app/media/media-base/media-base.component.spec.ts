import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBaseComponent } from './media-base.component';

describe('MediaBaseComponent', () => {
  let component: MediaBaseComponent;
  let fixture: ComponentFixture<MediaBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
