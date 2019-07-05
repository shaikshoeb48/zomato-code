import { Component, OnInit } from '@angular/core';
import { ServicelocService } from '../serviceloc.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  public check:any;
  public searched :any;
  public lat;
  public long;
  public array
  public result= false;

  constructor(public ServicelocService: ServicelocService) { }

  ngOnInit() {
  }

  public some(){
    this.ServicelocService.getSearch(this.check,this.lat,this.long).subscribe(
      data=>{
        this.searched=data.restaurants;
        console.log(this.searched);
        this.array=this.searched
        this.result=true
      },
      error=>{
        console.log("some error in getting searched term ");
        console.log(error)
      }
    )
  }

}
