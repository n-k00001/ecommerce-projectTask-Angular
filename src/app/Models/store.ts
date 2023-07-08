import { IProduct } from './iproduct';
import { ICatogry } from './icatogry';


export class Store {
    catogryList:ICatogry[] = [];
    constructor(public Name:string, public Logo:string, public Branches:string[]){
    }
    addCatogries(catogryList:ICatogry[]){
        this.catogryList = catogryList;
    }
}
