import { Patient } from "./patient";

export class Doctor {
    id!:number;
    name!:string;
    age!:number;
    gender!:string;
    specialist_fields!:string;
    patientDto!:Array<Patient>;
}
