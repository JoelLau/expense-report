import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesUiListComponent } from './expenses-ui-list.component';

describe('ExpensesUiListComponent', () => {
  let component: ExpensesUiListComponent;
  let fixture: ComponentFixture<ExpensesUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesUiListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
