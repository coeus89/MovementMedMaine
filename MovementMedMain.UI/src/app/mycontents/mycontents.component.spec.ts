import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycontentsComponent } from './mycontents.component';

describe('MycontentsComponent', () => {
  let component: MycontentsComponent;
  let fixture: ComponentFixture<MycontentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycontentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
