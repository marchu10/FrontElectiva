import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCMComponent } from './create-cm.component';

describe('CreateCMComponent', () => {
  let component: CreateCMComponent;
  let fixture: ComponentFixture<CreateCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
