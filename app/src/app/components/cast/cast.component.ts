import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-cast-content',
  // templateUrl: './cast-content.component.html',
  template: `
  <div class="modal-header">
  <h4 class="modal-title" style="color:black;">{{name}}</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body" style="color:black;">
  <div class="row">
    <div class="col-2">
      <img src="{{profile_path}}">
    </div>

      <p>hello</p>

  </div>

</div>
  `
})
export class CastContent {
  @Input() name;
  @Input() profile_path;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
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

  open() {
    const modalRef = this.modalService.open(CastContent);
    // this.fetchCastInfo();
    // modalRef.componentInstance.name = this.castDetail.name;
    // console.log(this.castDetail);

    this.detailService.getCastDetail(this.cast.id).subscribe(result => {
      this.castDetail = result['results'][0];
      modalRef.componentInstance.name = this.castDetail.name;
      modalRef.componentInstance.profile_path = this.castDetail.profile_path;
      modalRef.componentInstance.birthday = this.castDetail.birthday;
      modalRef.componentInstance.place_of_birth = this.castDetail.place_of_birth;
      modalRef.componentInstance.gender = this.castDetail.gender;
      modalRef.componentInstance.known_for_department = this.castDetail.known_for_department;
      modalRef.componentInstance.also_known_as = this.castDetail.also_known_as;
      modalRef.componentInstance.homepage = this.castDetail.homepage;
      modalRef.componentInstance.biography = this.castDetail.biography;



    })
  }

  // TODO: 为什么这样写不对?
  // public fetchCastInfo() {
  //   this.detailService.getCastDetail(this.cast.id).subscribe(result => {
  //     this.castDetail = result['results'][0];
  //     // console.log(this.castDetail)
  //   })
  //   this.detailService.getCastExternal(this.cast.id).subscribe(result => {
  //     this.castExternal = result['results'][0];
  //   })
  // }
}

