import { Component, OnInit } from '@angular/core';
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

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
  ) { }

 

  ngOnInit(): void {
  }

  onSubmit(data:any): void {
 
    this.profileService.addProfile(data).subscribe((response)=>{
      console.log(response);
      
    });
   // this.profileForm.reset();
  }

}
