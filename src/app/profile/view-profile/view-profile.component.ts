import { Component, OnInit,Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {


  
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }


  onSubmit(data:any): void {
 
    this.profileService.addProfile(data).subscribe((response)=>{
      console.log(response);
      
    });
   // this.profileForm.reset();
  }
}
