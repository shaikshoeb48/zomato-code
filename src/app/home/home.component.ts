import { Component, OnInit } from '@angular/core';
import { ServicelocService } from '../serviceloc.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public input: any;
  public final;
  public lat;
  public long;
  public rests: any;
  public name: any;
  public restrict = true;
 public result= false;
public array;
public rest_store;
  


  

  constructor(public ServicelocService: ServicelocService) {

  }


  ngOnInit() {
    this.ServicelocService.getGeo(Cookie.get('lat'), Cookie.get('long')).subscribe(
      data => {

        this.rests = data.nearby_restaurants;
        Cookie.set('restaurant_data',this.rests)
        console.log(Cookie.get('restaurant_data'))
        this.store();

        this.array=this.rests;

                 
        
        console.log(this.rests)
      },
      error => {
        console.log("some error has been occured");
        console.log(error)
      }
    )
  }

  public kya() {
    this.ServicelocService.getApi(this.input).subscribe(
      data => {

        console.log(data);
        this.final = data["location_suggestions"];
        for (let x in this.final) {
          this.long = this.final[x].longitude;
          Cookie.set('long',this.long)
          console.log(this.long)
          console.log(Cookie.get('long'))
        }
        for (let y in this.final) {
          this.lat = this.final[y].latitude;
          Cookie.set('lat',this.lat)
          console.log(this.lat)
          console.log(Cookie.get('lat'))
        }
        this.ServicelocService.lattitude=this.lat
        this.ServicelocService.longitude=this.long
        this.hao();
        this.restrict = false
        

      },
      error => {
        console.log("some  error has occured");
        console.log(error)
      }
    )


  }
  public hao() {
    this.ServicelocService.getGeo(this.lat, this.long).subscribe(
      data => {

        this.rests = data.nearby_restaurants;
        Cookie.set('restaurant_data',this.rests)
        console.log(Cookie.get('restaurant_data'))
        this.store();

        this.array=this.rests;

          this.result=true        
        
        console.log(this.rests)
      },
      error => {
        console.log("some error has been occured");
        console.log(error)
      }
    )
}
    
    
public store(){
  this.rest_store=Cookie.get('restaurant_data')
 
}


}
