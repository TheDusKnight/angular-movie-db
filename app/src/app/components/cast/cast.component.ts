import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-cast-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" style="color:black;">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" style="color:black;">
      <p>Hello, {{name}}!</p>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
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
  public castDetail: any = {}
  public castExternal: any = {}

  constructor(
    private modalService: NgbModal,
    private detailService: DetailService,
    ) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(CastContent);
    this.fetchCastInfo();
    modalRef.componentInstance.name = this.castDetail.name;
    console.log(this.castDetail);
  }

  public fetchCastInfo() {
    this.detailService.getCastDetail(this.cast.id).subscribe(result => {
      this.castDetail = result['results'];
      // console.log(this.castDetail)
    })
    this.detailService.getCastExternal(this.cast.id).subscribe(result => {
      this.castExternal = result['results'];
    })
  }
}

