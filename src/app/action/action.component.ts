import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { membre } from '../models/membre';
import { ActionservicesService } from '../services/actionservices.service';
import { action } from '../models/action';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  responsable : membre[]=[
    {nom:''
      ,
    age:0}
  ]
formsignin!: FormGroup;
res: any;
constructor(private fb:FormBuilder,private myService:ActionservicesService){
  this.formsignin=this.fb.group(
    {
      "nom": ["",[Validators.required]],
      "objectif":["",[Validators.required]],
      "responsable":["",[Validators.required]],
      "nbpersonnes":["",[Validators.required]],
      "date":["",[Validators.required]],



    }
  )}

  ngOnInit(): void {

this.myService.getResponsable().subscribe((data)=>{
  this.responsable=data
//  console.log(data)
})

}
save(){
  let action:action={
    id:0,
    nom: '',
    objectif: '',
    responsable:'' ,
    nbpersonnes: 0,
    date: new Date
  }
  
  action.nom=(this.formsignin.controls['nom'].value)
action.objectif=(this.formsignin.controls['objectif'].value)
action.responsable=(this.formsignin.controls['responsable'].value)
action.nbpersonnes=(this.formsignin.controls['nbpersonnes'].value)
action.date=(this.formsignin.controls['date'].value)
this.myService.addEvent(action).subscribe((data)=>{
  window.location.reload()
  console.log(data)
})

console.log(action)
//console.log(this.listeresponsables)




}
}
