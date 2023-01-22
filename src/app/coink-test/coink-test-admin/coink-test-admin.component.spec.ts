import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinkTestAdminComponent } from './coink-test-admin.component';

describe('CoinkTestAdminComponent', () => {
  let component: CoinkTestAdminComponent;
  let fixture: ComponentFixture<CoinkTestAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinkTestAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinkTestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
