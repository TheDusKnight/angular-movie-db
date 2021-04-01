import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [``],
})
export class CastComponent implements OnInit {
  @Input() cast: any = {}
  public castDetail: any = {} // ??
  public castExternal: any = {}

  constructor(
    private modalService: NgbModal,
    private detailService: DetailService,
    ) { }

  ngOnInit(): void {
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
    this.detailService.getCastDetail(this.cast.id).subscribe(result => {
      this.castDetail = result['results'][0];
      this.castDetail.gender = (this.castDetail.gender == "2" ? "Male" : "Female");
    })
    this.detailService.getCastExternal(this.cast.id).subscribe(result => {
      this.castExternal = result['results'][0];
    })
  }

  // openScrollableContent() {
    
  //   const modalRef = this.modalService.open(CastContent, {size: 'xl', scrollable: true});
    
  //   this.detailService.getCastDetail(this.cast.id).subscribe(result => {
  //     this.castDetail = result['results'][0];
  //     modalRef.componentInstance.name = this.castDetail.name || null;
  //     modalRef.componentInstance.profile_path = this.castDetail.profile_path || null;
  //     modalRef.componentInstance.birthday = this.castDetail.birthday ? "Birth: " + this.castDetail.birthday : null;
  //     modalRef.componentInstance.place_of_birth = this.castDetail.place_of_birth ? "Birth Place: " + this.castDetail.place_of_birth : null;
  //     modalRef.componentInstance.gender = "Gender " + (this.castDetail.gender == "2" ? "Male" : "Female");
  //     modalRef.componentInstance.known_for_department = this.castDetail.known_for_department ? "Known for: " + this.castDetail.known_for_department : null;
  //     modalRef.componentInstance.also_known_as = this.castDetail.also_known_as.length > 0 ? "Also Known as: " + this.castDetail.also_known_as : null;
  //     modalRef.componentInstance.homepage = this.castDetail.homepage ? "Website: " + this.castDetail.homepage : null;
  //     modalRef.componentInstance.biography = this.castDetail.biography || null;
  //   })
  // }
  
}

