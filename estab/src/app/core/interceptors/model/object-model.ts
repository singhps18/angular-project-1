import { ExecFileSyncOptionsWithBufferEncoding } from "child_process";
import { Address } from "cluster";

export class user {
    name!:string;
    password!:string;
    uploadphoto!:string;
    role!:string;
    mobNumber!:string;
    address!:Address;
    gender!:String;
    email!:string;
    dob!:string;
    agreetc!:boolean;
    age!:number;
    aboutYou!:string

}
export class address{
    id!:number;
    addres1!:string;
    addres2!:string;
    city!:string;
    state!:string;
    zipCode!:string;

}

export class product{
    id!:number;
    name!:string;
    uploadPhoto!:string;
    uploadDesc!:string;
    mrp!:number;
    dp!:number;
    status!:boolean;
}

export class order{
    id!:number;
    userId!:number;
    sellerId!:number;
    productId!:number;
    deliveryAddress!:address;
    contact!:number;
    dateTime!:string;

}