export const typeDef = `

type DiseaseMed{
    id:Int
    Disease:String
    Medicine:String
}

type PatientDetails {
    id:Int
    PatientName:String
    email:String
    details:DiseaseMed

}
input PatientDetailsInput {
    PatientName:String
    email:String
}

input DiseaseMedInput {
    Disease:String
    Medicine:String
}


type Mutation{
    createPatient(PatientDETAILS: PatientDetailsInput, detailsMEDICINE: DiseaseMedInput): String!
}

type Query {
    greet : String!
    getPatients: [PatientDetails!]
    getPatient(id:Int!):PatientDetails!
}


`