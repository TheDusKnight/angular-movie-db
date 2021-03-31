import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  public type: string;
  public id:string;
  public video = <any> {};
  public detail = <any> {};
  // public prefix:string = "https://www.youtube.com/watch?v="

  private _add = new Subject<string>();
  private _remove = new Subject<string>();
  public watchButton = '';
  public added:boolean = false;
  staticAlertClosed = false;
  addMessage = '';
  removeMessage = '';
  @ViewChild('selfClosingAlert', {static: false})
  selfClosingAlert: NgbAlert; // any?

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.type = routeParams.get('type');
    this.id = routeParams.get('id');
    // console.log(this.id, this.type);
    this.fetchDetail();
    // this.storage(this.id, this.type, this.detail.name, this.detail.);

    var watchList = localStorage.getItem('watchList') || [];
    if (watchList.includes(this.id)) {
      this.watchButton = "Remove from Watchlist";
    } else {
      this.watchButton = "Add to Watchlist";
    }

    this._add.subscribe(message => this.addMessage = message);
    this._add.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
    this._remove.subscribe(message => this.removeMessage = message);
    this._remove.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public addRemoveMessage() {
    // this._add.next(`Added to watchlist`);
    // this._remove.next(`Removed from watchlist`);
    var watchList = JSON.parse(localStorage.getItem("watchList")) || [];
    if (watchList.includes(this.id)) {
      this.watchButton = "Add to Watchlist";
      this._add.next('');
      this._remove.next(`Removed from watchList`);
      watchList = watchList.filter(item => item !== this.id);
      localStorage.setItem("watchList", JSON.stringify(watchList))
      // localStorage.removeItem(this.id)
    } else {
      this.watchButton = "Remove from Watchlist";
      this._remove.next('');
      this._add.next(`Added to watchList`);
      watchList.unshift(this.id);
      localStorage.setItem("watchList", JSON.stringify(watchList));
      // TODO: store cache or not?
    }
  }


  fetchDetail() {
    this.detailService.getVideo(this.type, this.id).subscribe(result => {
        this.video = result['results'][0];
    })
    this.detailService.getDetail(this.type, this.id).subscribe(result => {
        this.detail = result['results'][0];
        this.detail.release_date = new Date(this.detail.release_date).getFullYear().toString();
        this.detail.runtime = timeConvert(this.detail.runtime)
        this.detail.genres = this.detail.genres.filter(Boolean).join(', ')
        this.detail.spoken_languages = this.detail.spoken_languages.filter(Boolean).join(', ')

        // store in local storage
        var orderList = JSON.parse(localStorage.getItem("orderList")) || [];
        if (orderList.length < 24) {
          // if (localStorage.getItem(this.id) === null) {
          if (!orderList.includes(this.id)) {
            orderList.unshift(this.id); // add to last
            const store = {
              id: this.id,
              name: this.detail.name,
              poster_path: this.detail.poster_path,
              media_type: this.type,
            }
            localStorage.setItem("orderList", JSON.stringify(orderList));
            localStorage.setItem(this.id, JSON.stringify(store));
          } else {
            // StackOverFlow JavaScript move an item of an array to the front
            orderList = orderList.filter(item => item !== this.id);
            orderList.unshift(this.id);
            localStorage.setItem('orderList', JSON.stringify(orderList));
          }
        } else { // remove Least Recently Used item
          const lastItem = orderList.pop();
          // TODO: remove cache or not?
          // localStorage.removeItem(lastItem);
          orderList.unshift(this.id);
          localStorage.setItem("orderList", JSON.stringify(orderList));
          const store = {
            id: this.id,
            name: this.detail.name,
            poster_path: this.detail.poster_path,
            media_type: this.type,
          }
          localStorage.setItem(this.id, JSON.stringify(store));
        }
        // console.log(localStorage);
    })
  }
}

function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + " hrs " + rminutes + " mins";
  }