import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesUiListItemComponent } from './expenses-ui-list-item.component';

describe('ExpensesUiListItemComponent', () => {
  let component: ExpensesUiListItemComponent;
  let fixture: ComponentFixture<ExpensesUiListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesUiListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesUiListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
