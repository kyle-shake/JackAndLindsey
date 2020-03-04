import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareItemBottomSheetComponent } from './share-item-bottom-sheet.component';

describe('ShareItemBottomSheetComponent', () => {
  let component: ShareItemBottomSheetComponent;
  let fixture: ComponentFixture<ShareItemBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareItemBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareItemBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
