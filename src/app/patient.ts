import { Doctor } from "./doctor";

export class Patient {
    id!:number;
    name!:string;
    age!:number;
    dateOfVisit!:string;
    plainDto!:Doctor
}
