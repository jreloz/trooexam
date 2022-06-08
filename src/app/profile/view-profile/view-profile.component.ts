import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {



  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute
  ) { 

  }

  
  profileId:string = "";


  ngOnInit(): void {
    let params: any = this.activatedRoute.snapshot.params;
    this.profileId = params.id;

    this.getProfileInfo();
  }


  getProfileInfo(){
    this.profileService.viewProfile(this.profileId).subscribe((response)=>{
      this.profileInfo = response.data;
    })
  }


  buttonName = "Update";
  profileInfo:any = {};
 
}
