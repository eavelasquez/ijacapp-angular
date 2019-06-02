import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedRegisterComponent } from './get-started-register.component';

describe('GetStartedRegisterComponent', () => {
  let component: GetStartedRegisterComponent;
  let fixture: ComponentFixture<GetStartedRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStartedRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
