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
      if (result['results'].length > 0) {
        this.video = result['results'][0];
        // document.getElementById('video').setAttribute('src', this.video.key);
      };
      // console.log(this.video[0]);
    })
  }

}
