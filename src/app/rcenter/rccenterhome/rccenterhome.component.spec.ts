import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RccenterhomeComponent } from './rccenterhome.component';

describe('RccenterhomeComponent', () => {
  let component: RccenterhomeComponent;
  let fixture: ComponentFixture<RccenterhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RccenterhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RccenterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
