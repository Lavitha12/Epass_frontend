import { UserserviceService } from './../userservice.service';
import { IndUser } from './../ind-user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.css']
})
export class IndividualUserComponent implements OnInit {

  idproofs=['Aadhar Card','Pan Card','Voter ID'];

  vehicles=['Bus','Van','Car','Two Wheeler','Train'];

  reasons=['Marriage','Death','Medical Emergency'];

  districts=['Ariyalur','Chengalpattu', 'Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi',
  'Kancheepuram','Kanyakumari','Karur','Krishnagiri','Madurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai',
  'Ramanathapuram', 'Ranipet', 'Salem', 'Sivagangai','Tenkasi', 'Thanjavur', 'Theni', 'Tirunelveli', 'Tirupattur', 'Tiruppur'
  ,'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Tiruchirapalli', 'Thoothukudi', 'Vellore', 'Villupuram', 'Virudhunagar'
  ,'Puducherry', 'Karaikal', 'Mahe', 'Yanam'];

  indmodel = new IndUser('',0,'','',0,'','','','','','','','','');
  message:any = "Details submitted!!!"
  constructor(public service:UserserviceService) { }
  ngOnInit(): void {
  } 
  public onSubmit()
  {
    let resp=this.service.indpost(this.indmodel);
    resp.subscribe((data)=>this.message=data);
    let 
    if()
  }

}
