import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercompComponent } from './registercomp.component';

describe('RegistercompComponent', () => {
  let component: RegistercompComponent;
  let fixture: ComponentFixture<RegistercompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistercompComponent]
    });
    fixture = TestBed.createComponent(RegistercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});