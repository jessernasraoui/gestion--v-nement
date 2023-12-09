import { membre } from "./membre"

export interface action{
    id:number
    nom:string
    objectif:string
    responsable:string
    nbpersonnes:number
    date:Date
}