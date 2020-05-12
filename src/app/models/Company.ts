import { Coupon } from './Coupon';

export class Company {
    
    public constructor(public id?:number,public name?:string,public email?:string,public password?:string,public coupons?:[Coupon]) {

    }
}

export class Notifications {

    public constructor(public message?:string){
    
    }
    
    
    }