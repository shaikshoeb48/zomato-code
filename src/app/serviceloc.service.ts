import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ServicelocService {

  public  lattitude;
  public longitude;

  // location url 
  public locUrl = "https://developers.zomato.com/api/v2.1/locations?query=";


  // geocode url
  public geoUrl = "https://developers.zomato.com/api/v2.1/geocode?lat=";


  //view url
  public viewUrl = "https://developers.zomato.com/api/v2.1/restaurant?res_id=";


//searchRest url
public searchUrl = "https://developers.zomato.com/api/v2.1/search?q=";


  constructor(private _http: HttpClient) {

  }


  // location get request
  public getApi(input): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'applicaton/json',
        'user-key': '9e5b2131e58cd99a467fc9766c758ea3'
      })
    }
    let MyApi = this._http.get(this.locUrl + input, httpOptions);
    console.log(MyApi);
    return MyApi
  }

  // geoCode get request

  public getGeo(lattitude, longitude): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'user-key': '9e5b2131e58cd99a467fc9766c758ea3'
      })
    }
    return this._http.get(this.geoUrl + lattitude + "&lon=" + longitude, httpOptions);


  }


  //resttaurant-view get reqest

  public getView(myRestId): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'user-key': '9e5b2131e58cd99a467fc9766c758ea3'
      })
    }
    return this._http.get(this.viewUrl + myRestId, httpOptions);
  }

// search Url
  public getSearch(name,lat,long): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'applicaton/json',
        'user-key': '9e5b2131e58cd99a467fc9766c758ea3'
      })
    }
     return  this._http.get(this.searchUrl+name+"&lat="+this.lattitude+"&lon="+this.longitude, httpOptions);
    
  }


}
