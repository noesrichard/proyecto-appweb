
export interface Service<T>{ 

    list(): T[]; 

    findById(id: any): T; 

    create(element: T): void;

    update(id: any, element: T): void; 

    delete(id: any): void;


}
