import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { CollapseNavbarComponent } from './collapse-navbar/collapse-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselPauseComponent,
    CollapseNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
