import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { Account } from '../../../services/accounts/account';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { Option } from '../../../shared/components/dropdown-option-input/dropdown-option-input.component';

@Component({
    selector: 'gig-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnChanges {
    @Input() account!: Account;

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    selected: Option = { label: 'Ahorro', value: 'ahorro' };

    accountTypeOptions: Option[] = [
        { label: 'Ahorro', value: 'ahorro' },
        { label: 'Crédito', value: 'credito' },
        { label: 'Efectivo', value: 'efectivo' },
    ];

    constructor(private accountService: AccountsService) {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['account'] && changes['account'].currentValue) {
            let account = changes['account'];
            let type = this.accountTypeOptions.find(
                (element) => element.label == account.currentValue.type
            );
            this.selected = { label: type?.label, value: type?.value };
        }
    }

    save() {
        if (!this.account._id) {
            this.accountService.create(this.account).subscribe();
        } else {
            this.accountService.update(this.account._id, this.account).subscribe();
        }
        this.displayChange.emit(false);
    }

    setName(name: string) {
        this.account.name = name;
    }

    setDescription(description: string) {
        this.account.description = description;
    }

    setType(typeOption: any) {
        this.account.type = typeOption.label;
    }

    hideForm() {
        this.displayChange.emit(false);
    }
}
