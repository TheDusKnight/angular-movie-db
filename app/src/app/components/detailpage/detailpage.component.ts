import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public detail:any;
  // public prefix:string = "https://www.youtube.com/watch?v="

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.type = routeParams.get('type');
    this.id = routeParams.get('id');
    // console.log(this.id, this.type);
    this.fetchVideo();
  }


  fetchVideo() {
    this.detailService.getVideo(this.type, this.id).subscribe(result => {
        this.video = result['results'][0];
    })
    this.detailService.getDetail(this.type, this.id).subscribe(result => {
        this.detail = result['results'][0];
        this.detail.release_date = new Date(this.detail.release_date).getFullYear().toString();
        this.detail.runtime = timeConvert(this.detail.runtime)
        this.detail.genres = this.detail.genres.filter(Boolean).join(', ')
        this.detail.spoken_languages = this.detail.spoken_languages.filter(Boolean).join(', ')
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