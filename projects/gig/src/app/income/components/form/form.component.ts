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


    @Output() dataChange: EventEmitter<any> = new EventEmitter();

    selectedType: Option = { label: 'Ahorro', value: 'ahorro' };
    selectedAccount: Option = { label: '', value: '' };

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

    dataChanged() {
        this.dataChange.emit(true);
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
            this.selectedType = { label: type?.label, value: type?.value };
            let account = this.incomeAccountOptions.find(
                (element: Option) => element.label == income.currentValue.account
            );
            this.selectedAccount = {label: account?.label, value: account?.value}
        }
    }

    save() {
        if (!this.income._id) {
            this.incomeService.create(this.income).subscribe(()=>{ 
               this.dataChanged(); 
            });
        } else {
            this.incomeService.update(this.income._id, this.income).subscribe(()=>{ 
               this.dataChanged(); 
            });
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
