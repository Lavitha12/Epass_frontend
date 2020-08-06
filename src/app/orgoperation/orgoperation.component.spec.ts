import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgoperationComponent } from './orgoperation.component';

describe('OrgoperationComponent', () => {
  let component: OrgoperationComponent;
  let fixture: ComponentFixture<OrgoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
