import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { Account } from '../../../services/accounts/account';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { CategoryService } from '../../../services/categories/categories.service';
import {Category} from '../../../services/categories/category';
import { Expense } from '../../../services/expenses/expense';
import { ExpensesService } from '../../../services/expenses/expenses.service';
import { Option } from '../../../shared/components/dropdown-option-input/dropdown-option-input.component';

@Component({
    selector: 'gig-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    @Input() expense!: Expense;

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    

    selectedType: Option = { label: 'Ahorro', value: 'ahorro' };
    selectedAccount: Option = { label: '', value: '' };
    selectedCategory: Option = {label: '', value: ''};

    expenseTypeOptions: Option[] = [
        { label: 'Unico', value: 'unico' },
        { label: 'Mensual', value: 'mensual' },
    ];

    expenseCategoryOptions: Option[] = [];

    expenseAccountOptions: Option[] = [];

    constructor(
        private expenseService: ExpensesService,
        private categoryService: CategoryService,
        private accountService: AccountsService
    ) {}

    ngOnInit(): void {
        this.setCategoriesOptions();
        this.setAccountOptions();
    }

    setCategoriesOptions() {
        this.categoryService.list().subscribe((data) => {
            data.forEach((category: Category) => {
                this.expenseCategoryOptions.push({
                    label: category.name,
                    value: category.name.toLowerCase(),
                });
            });
        });
    }

    setAccountOptions() {
        this.accountService.list().subscribe((data) => {
            data.forEach((a: Account) => {
                this.expenseAccountOptions.push({
                    label: a.name,
                    value: a.name.toLowerCase(),
                });
            });
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['expense'] && changes['expense'].currentValue) {
            let expense = changes['expense'];
            let type = this.expenseTypeOptions.find(
                (element) => element.label == expense.currentValue.type
            );
            this.selectedType = {...type};
            let account = this.expenseAccountOptions.find(
                (element: Option) => element.label == expense.currentValue.account
            );
            this.selectedAccount = {...account}
            let category = this.expenseCategoryOptions.find(
                ( element: Option ) => element.label == expense.currentValue.category            
            );
            this.selectedCategory = {...category}; 
        }
    }

    save() {
        if (!this.expense._id) {
            this.expenseService.create(this.expense).subscribe();
        } else {
            this.expenseService.update(this.expense._id, this.expense).subscribe();
        }
        this.displayChange.emit(false);
    }

    setType(typeOption: any) {
        this.expense.type = typeOption.label;
    }
    setDescription(description: string) {
        this.expense.description = description;
    }

    setCategory(categoryOption: any) {
        this.expense.category = categoryOption.label;
    }

    setAccount(accoutnOption: any) {
        this.expense.account = accoutnOption.label;
    }

    setTotal(total: number) {
        this.expense.total = total;
    }

    hideForm() {
        this.displayChange.emit(false);
    }
}
