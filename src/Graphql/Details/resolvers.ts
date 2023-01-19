import PatientDetailDiseaseMed from "../../Service/ServiceClass"

export const PatientResolver ={
    Query :{
    greet(){
        return PatientDetailDiseaseMed.greet()
    },
    getPatient(parent:any, args:any , context:any){
        return PatientDetailDiseaseMed.getPatient(args.id)
    },
    getPatients(){
        return PatientDetailDiseaseMed.getPatients()
    }
},
Mutation :{
    createPatient(parent:unknown, args:any){
        return PatientDetailDiseaseMed.createPatient(args.PatientDETAILS,args.detailsMEDICINE)
    }
}
} 