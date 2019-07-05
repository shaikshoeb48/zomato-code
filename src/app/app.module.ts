import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicelocService } from './serviceloc.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestViewComponent } from './rest-view/rest-view.component';
import { SearchViewComponent } from './search-view/search-view.component'
import {AgmCoreModule} from '@agm/core';
import { AutofocusDirective } from './autofocus.directive';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestViewComponent,
    SearchViewComponent,
    AutofocusDirective,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'rest-view/:rest.restaurant.R.res_id', component: RestViewComponent },
      { path: 'search-view',component:SearchViewComponent},
      {path:'**',component:NotFoundComponent}

    ]),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDlWJ6DorfMTC5XK8T8ODUoFL33xUl92tA'
    })

  ],
  providers: [ServicelocService],
  bootstrap: [AppComponent]

})
export class AppModule { }
