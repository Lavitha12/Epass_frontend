import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoperationComponent } from './indoperation.component';

describe('IndoperationComponent', () => {
  let component: IndoperationComponent;
  let fixture: ComponentFixture<IndoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
