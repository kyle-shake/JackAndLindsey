import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaViewerDialogComponent } from './media-viewer-dialog.component';

describe('MediaViewerDialogComponent', () => {
  let component: MediaViewerDialogComponent;
  let fixture: ComponentFixture<MediaViewerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaViewerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaViewerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
