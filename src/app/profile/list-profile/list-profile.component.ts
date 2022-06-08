import { Component, OnInit, Input } from '@angular/core';
import { response } from 'express';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss']
})
export class ListProfileComponent implements OnInit {


  @Input() buttonName:any = "";

  constructor(
    private profileService:ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  profileList: any = [];


  getProfiles(){
    this.profileService.profileList().subscribe((response)=>{
        this.profileList = response.data;
     
    })
  }


  deleteProfile(id:number){
    
    this.profileService.deleteProfile(id).subscribe((response)=>{
      this.profileList = response.data;
      this.getProfiles();
    });
  }



}
