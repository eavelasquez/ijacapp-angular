import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilPageComponent } from './affil-page.component';

describe('AffilPageComponent', () => {
  let component: AffilPageComponent;
  let fixture: ComponentFixture<AffilPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffilPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
