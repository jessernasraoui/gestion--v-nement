import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { action } from 'src/app/models/action';
import { ActionservicesService } from 'src/app/services/actionservices.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {
actionForm !: FormGroup;
act:action={id:0,nom:"",objectif:"",responsable:"",nbpersonnes:0,date:new Date}
  delete(id:any){
    this.api.deleteAction(id).subscribe(res=>{
      window.location.reload()
    })
  }
  modifier(id:number){
    this.api.getActionById(id).subscribe(data=>{
      this.act=data
      //this.actionForm.controls['id'].setValue(this.act.id)
      this.actionForm.controls['nom'].setValue(this.act.nom)
      this.actionForm.controls['responsable'].setValue(this.act.responsable)

      this.actionForm.controls['objectif'].setValue(this.act.objectif)
      this.actionForm.controls['nbpersonnes'].setValue(this.act.nbpersonnes)
      this.actionForm.controls['date'].setValue(this.act.date)
      console.log(this.act)

 

    })
  }
  savemodification(id:number){

let action:action={id:0,nom:"",objectif:"",responsable:"",nbpersonnes:0,date:new Date}

action.nom=this.actionForm.controls['nom'].value
action.objectif=this.actionForm.controls['objectif'].value
action.responsable=this.actionForm.controls['responsable'].value
action.nbpersonnes=this.actionForm.controls['nbpersonnes'].value
action.date=this.actionForm.controls['date'].value
   action.id=id
   this.api.modifyEvent(id,action).subscribe(()=>{
    window.location.reload()
   })
   
     
  }
  
actions:action[]=[]
  constructor(private api:ActionservicesService,private fb:FormBuilder){

  }
  ngOnInit(): void {
this.api.getAction().subscribe((data)=>{
  this.actions=data
})
this.actionForm=this.fb.group(
  {
    "nom": ["",[Validators.required]],
    "objectif":["",[Validators.required]],
    "responsable":["",[Validators.required]],
    "nbpersonnes":["",[Validators.required]],
    "date":["",[Validators.required]],



  }
)
  }

}

