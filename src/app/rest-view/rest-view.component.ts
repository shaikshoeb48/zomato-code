import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicelocService } from '../serviceloc.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-rest-view',
  templateUrl: './rest-view.component.html',
  styleUrls: ['./rest-view.component.css']
})
export class RestViewComponent implements OnInit {
  title: string = 'My first AGM project';
  lat ;
  lng ;

  public currentRest: any;
  public f_image :any
  public reviews;
  public r_image;
  public address;
  public aggregate;
  public cost;
  public r_text;
  public r_votes;
  public r_high

  
  


  constructor(private _route: ActivatedRoute, public router: Router, public ServicelocService: ServicelocService) {
    console.log("constructor is called");
this.lat = this.ServicelocService.lattitude;
this.lng = this.ServicelocService.longitude

  }

  ngOnInit() {

    console.log("on init is called");
    let myRestId = this._route.snapshot.paramMap.get('rest.restaurant.R.res_id');
    console.log(myRestId)




    this.currentRest = this.ServicelocService.getView(myRestId).subscribe(
      data => {

        console.log(data);
        this.currentRest=data;
        this.reviews = data.all_reviews.reviews;
        this.f_image=data.featured_image;
        this.address=data.location.address;
        this.aggregate=data.user_rating.aggregate_rating;
        this.cost=data.average_cost_for_two;
        this.r_image=data.photos;
        this.r_text=data.user_rating.rating_text;
        this.r_votes=data.user_rating.votes
        this.r_high=data.highlights
      
        
      },
      error => {
        console.log('some error occured')
        console.log(error)
      }

    )

    


  }
}
