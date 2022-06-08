import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { FormBuilder } from '@angular/forms';
import { Profile } from 'src/app/models/profile';
import { response } from 'express';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {


  @Input() buttonName:string = "Save";
  @Input() profileId:string = "";
  @Input() profileInfo:any = [];

  constructor(
    private profileService: ProfileService,
  ) { }

 


  ngOnInit(): void {
    
  }


  onSubmit(data:any): void {
 
    if (this.buttonName == "Save") {
      this.addProfile(data);
    } else {
      this.updateProfile(data);
    }
   
  }


  addProfile(data:any){
    this.profileService.addProfile(data).subscribe((response)=>{
      console.log(response);
    });
   // this.profileForm.reset();
  }


  updateProfile(data:any): void {
    
    this.profileService.updateProfile(this.profileId,data).subscribe((response)=>{
      console.log(response);
    });
   // this.profileForm.reset();
  }

}
