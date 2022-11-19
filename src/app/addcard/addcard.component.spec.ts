import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcardComponent } from './addcard.component';

describe('AddcardComponent', () => {
  let component: AddcardComponent;
  let fixture: ComponentFixture<AddcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
