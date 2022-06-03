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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'gig-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnChanges {
    @Input() account!: Account;

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    @Output() newData: EventEmitter<any> = new EventEmitter();
    @Output() editData: EventEmitter<any> = new EventEmitter();

    selected: Option = { label: 'Ahorro', value: 'ahorro' };

    group!: FormGroup;

    accountTypeOptions: Option[] = [
        { label: 'Ahorro', value: 'ahorro' },
        { label: 'Crédito', value: 'credito' },
        { label: 'Efectivo', value: 'efectivo' },
    ];

    constructor(private accountService: AccountsService, private messageService: MessageService) {}

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

    newDataEvent() {
        this.newData.emit(this.account);
    }

    editDataEvent(){ 
        this.editData.emit(this.account); 
    }

    checkData() {
        if (
            this.account.name == '' ||
            this.account.type == '' ||
            this.account.description == ''
        ) {
            return false;
        }
        return true;
    }

    save() {
        if (this.checkData()) {
            if (!this.account._id) {
                this.accountService.create(this.account).subscribe(() => {
                    this.newDataEvent();
                });
            } else {
                this.accountService
                    .update(this.account._id, this.account)
                    .subscribe(() => {
                        this.editDataEvent();
                    });
            }
            this.displayChange.emit(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Formulario Incompleto',
                detail: 'Debe completar el formulario',
                life: 3000,
            });
        }
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
