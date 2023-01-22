import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinkTestLayoutComponent } from './coink-test-layout.component';

describe('CoinkTestLayoutComponent', () => {
  let component: CoinkTestLayoutComponent;
  let fixture: ComponentFixture<CoinkTestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinkTestLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinkTestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
