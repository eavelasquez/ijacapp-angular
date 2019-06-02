import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityActionPageComponent } from './community-action-page.component';

describe('CommunityActionPageComponent', () => {
  let component: CommunityActionPageComponent;
  let fixture: ComponentFixture<CommunityActionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityActionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityActionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
