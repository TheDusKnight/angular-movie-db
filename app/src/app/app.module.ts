import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakpointComponent } from './components/breakpoint/breakpoint.component';
import { CardComponent } from './components/card/card.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { CarouselPauseComponent } from './components/carousel-pause/carousel-pause.component';
import { CollapseNavbarComponent } from './components/collapse-navbar/collapse-navbar.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistpageComponent } from './components/mylistpage/mylistpage.component';
import { AlertSelfclosingComponent } from './components/alert-selfclosing/alert-selfclosing.component';
import { CastComponent } from './components/cast/cast.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReviewComponent } from './components/review/review.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';

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
    FooterComponent,
    AlertSelfclosingComponent,
    CastComponent,
    PopoverComponent,
    ModalComponent,
    ReviewComponent,
    TypeaheadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    FormsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
