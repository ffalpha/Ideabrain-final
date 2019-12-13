import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QahomeComponent } from './qahome.component';

describe('QahomeComponent', () => {
  let component: QahomeComponent;
  let fixture: ComponentFixture<QahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
