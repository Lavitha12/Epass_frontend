import { OrgUser } from './../org-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {

  idproofs=['Aadhar Card','Pan Card','Voter ID'];

  vehicles=['Bus','Van','Car','Two Wheeler','Train'];

  districts=['Ariyalur','Chengalpattu', 'Chennai','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kallakurichi',
  'Kancheepuram','Kanyakumari','Karur','Krishnagiri','Madurai','Nagapattinam','Namakkal','Nilgiris','Perambalur','Pudukkottai',
  'Ramanathapuram', 'Ranipet', 'Salem', 'Sivagangai','Tenkasi', 'Thanjavur', 'Theni', 'Tirunelveli', 'Tirupattur', 'Tiruppur'
  ,'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Tiruchirapalli', 'Thoothukudi', 'Vellore', 'Villupuram', 'Virudhunagar'
  ,'Puducherry', 'Karaikal', 'Mahe', 'Yanam'];

  orgmodel = new OrgUser('','','','','','','','','',2,'','');
  constructor() { }

  ngOnInit(): void {
  }

}
