import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonsListComponent } from './sales-persons-list.component';

describe('SalesPersonsListComponent', () => {
  let component: SalesPersonsListComponent;
  let fixture: ComponentFixture<SalesPersonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersonsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
