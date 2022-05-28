import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    SimpleChanges,
} from '@angular/core';
import { Account } from '../../../services/accounts/account';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { Income } from '../../../services/income/income';
import { IncomeService } from '../../../services/income/income.service';
import { Option } from '../../../shared/components/dropdown-option-input/dropdown-option-input.component';

@Component({
    selector: 'gig-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    @Input() income!: Income;

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    selected: Option = { label: 'Ahorro', value: 'ahorro' };

    incomeTypeOptions: Option[] = [
        { label: 'Unico', value: 'unico' },
        { label: 'Mensual', value: 'mensual' },
    ];

    incomeCategoryOptions: Option[] = [];

    incomeAccountOptions: Option[] = [];

    constructor(
        private incomeService: IncomeService,
        private accountService: AccountsService
    ) {}

    ngOnInit(): void {
        this.setAccountOptions();
    }

    setAccountOptions() {
        this.accountService.list().subscribe((data) => {
            data.forEach((a: Account) => {
                this.incomeAccountOptions.push({
                    label: a.name,
                    value: a.name.toLowerCase(),
                });
            });
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['income'] && changes['income'].currentValue) {
            let income = changes['income'];
            let type = this.incomeTypeOptions.find(
                (element) => element.label == income.currentValue.type
            );
            this.selected = { label: type?.label, value: type?.value };
        }
    }

    save() {
        if (this.income.isNew()) {
            this.incomeService.create(this.income);
        } else {
            this.incomeService.update(this.income._id, this.income);
        }
        this.displayChange.emit(false);
    }

    setType(typeOption: any) {
        this.income.type = typeOption.label;
    }
    setDescription(description: string) {
        this.income.description = description;
    }

    setAccount(accoutnOption: any) {
        this.income.account = accoutnOption.label;
    }

    setTotal(total: number) {
        this.income.total = total;
    }

    hideForm() {
        this.displayChange.emit(false);
    }
}
