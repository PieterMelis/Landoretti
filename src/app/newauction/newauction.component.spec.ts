import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewauctionComponent } from './newauction.component';

describe('NewauctionComponent', () => {
  let component: NewauctionComponent;
  let fixture: ComponentFixture<NewauctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewauctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
