import { DBConnections } from "../Resources/Datasource";
import { PatientDetails } from "../Entity/Patient";
import { DiseaseMed } from "../Entity/Disease";

const PatientDls = DBConnections.getRepository(PatientDetails);
const DiseaseMds = DBConnections.getRepository(DiseaseMed);

class PatientDetailDiseaseMed {
  public static greet() {
    return "Welcome to Smart_Meds";
  }

  public static async getPatient(id: number){
    const user = await PatientDls.findOne({where:{id: id}})
    console.log(user);
    
    return user;
}


  public static async getPatients(){
    const users =await PatientDls.find()
    console.log(users);
    
    return users
  }

  public static async createPatient(
    patient: PatientDetails,
    Disease: DiseaseMed
  ) {
    const PatientDsc = new DiseaseMed();
    PatientDsc.Disease = Disease?.Disease;
    PatientDsc.Medicine = Disease?.Medicine;

    const PatientDTLS = new PatientDetails();
    PatientDTLS.PatientName = patient?.PatientName;
    PatientDTLS.email = patient?.email;
    PatientDTLS.smart_Meds = [PatientDsc];
    await PatientDls.save(PatientDTLS);
    console.log(PatientDTLS)
    return "created SucessFully!";
  }

}

export default PatientDetailDiseaseMed;
