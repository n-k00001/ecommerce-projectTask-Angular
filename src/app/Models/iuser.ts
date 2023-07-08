
export interface Iuser {
    id: number;
    name: string;
    email: string;
    password: string;
    address:{
        city:string,
        postalCode:number,
        street:string
    }
    phoneNumber: string;
}
  