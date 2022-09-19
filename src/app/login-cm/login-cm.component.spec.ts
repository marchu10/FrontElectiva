import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCmComponent } from './login-cm.component';

describe('LoginCmComponent', () => {
  let component: LoginCmComponent;
  let fixture: ComponentFixture<LoginCmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
