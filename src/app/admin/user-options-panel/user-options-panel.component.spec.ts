import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptionsPanelComponent } from './user-options-panel.component';

describe('UserOptionsPanelComponent', () => {
  let component: UserOptionsPanelComponent;
  let fixture: ComponentFixture<UserOptionsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOptionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOptionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
