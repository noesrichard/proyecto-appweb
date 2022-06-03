import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    SimpleChanges,
} from '@angular/core';
import { CategoryService } from '../../../services/categories/categories.service';
import { Category } from '../../../services/categories/category';
import { Wish } from '../../../services/wishlist/wish';
import { WishlistService } from '../../../services/wishlist/wishlist.service';
import { Option } from '../../../shared/components/dropdown-option-input/dropdown-option-input.component';

@Component({
    selector: 'gig-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    @Input() wish!: Wish;

    @Input() display: boolean = false;
    @Output() displayChange = new EventEmitter<boolean>();

    @Output() dataChange: EventEmitter<any> = new EventEmitter();

    selectedType: Option = { label: '', value: '' };
    selectedCategory: Option = { label: '', value: '' };

    date: Date = new Date(Date.now());

    wishTypeOptions: Option[] = [
        { label: 'Unico', value: 'unico' },
        { label: 'Mensual', value: 'mensual' },
    ];

    wishCategoryOptions: Option[] = [];

    constructor(
        private wishService: WishlistService,
        private categoryService: CategoryService
    ) {}

    ngOnInit(): void {
        this.setCategoryOptions();
    }

    dataChanged() {
        this.dataChange.emit(true);
    }

    setCategoryOptions() {
        this.categoryService.list().subscribe((data) => {
            data.forEach((a: Category) => {
                this.wishCategoryOptions.push({ label: a.name, value: a._id });
            });
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        let wish = changes['wish'];
        console.log(wish);
        if (changes['wish'] && changes['wish'].currentValue._id) {
            console.log("entra");
            console.log(this.wishCategoryOptions); 
            let category = this.wishCategoryOptions.find(
                (element: Option) =>
                    element.label == wish.currentValue.category.name
            );
            this.selectedCategory = { ...category };
        } else {
            this.selectedCategory = { label: '', value: '' };
        }
    }

    hideForm() {
        this.displayChange.emit(false);
    }

    save() {
        if (!this.wish._id) {
            this.wishService.create(this.wish).subscribe(() => {
                this.dataChanged();
            });
        } else {
            this.wishService.update(this.wish._id, this.wish).subscribe(() => {
                this.dataChanged();
            });
        }
        this.displayChange.emit(false);
    }

    setDescription(description: string) {
        this.wish.description = description;
    }

    setCategory(categoryOption: any) {
        this.wish.category = categoryOption.value;
    }
    setTotal(total: number) {
        this.wish.total = total;
    }
}
