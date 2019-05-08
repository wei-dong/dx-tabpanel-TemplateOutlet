import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOTComponent } from './lot.component';

describe('LOTComponent', () => {
  let component: LOTComponent;
  let fixture: ComponentFixture<LOTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
