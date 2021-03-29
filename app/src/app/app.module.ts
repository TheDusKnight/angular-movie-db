import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakpointComponent } from './components/breakpoint/breakpoint.component';
import { CardComponent } from './components/card/card.component';
import { CarouselPauseComponent } from './components/carousel-pause/carousel-pause.component';
import { CollapseNavbarComponent } from './components/collapse-navbar/collapse-navbar.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistpageComponent } from './components/mylistpage/mylistpage.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselPauseComponent,
    CollapseNavbarComponent,
    HomepageComponent,
    MylistpageComponent,
    DetailpageComponent,
    BreakpointComponent,
    CardComponent,
    CarouselCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
