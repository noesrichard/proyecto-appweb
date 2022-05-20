import { Injectable } from '@angular/core';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(): Category[]{ 
      return [ new Category(1, 'Ropa', 'Camiestas, zapatos, etc...', 30) ]
  }
}
