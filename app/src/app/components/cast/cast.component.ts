import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-cast-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" style="color:black;">{{name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" style="color:black;">
      <div class="col-8">

      </div>
      <div class="col-4">
        
      </div>
      <p>hello</p>
    </div>
  `
})
export class CastContent {
  @Input() name;
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
      modalRef.componentInstance.birthday = this.castDetail.birthday;
      modalRef.componentInstance.place_of_birth = this.castDetail.place_of_birth;
      modalRef.componentInstance.gender = this.castDetail.gender;
      modalRef.componentInstance.birthday = this.castDetail.birthday;

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

