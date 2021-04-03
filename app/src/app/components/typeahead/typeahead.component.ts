import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

const host = 'https://trevor-imdb-framework.wm.r.appspot.com/';
@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    // return this.http.get(host + '/search/test/' + term)
    return this.http.get(host + '/search/multi/' + term).pipe(
      map(response => response['results'])
    );
  }
}

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  providers: [SearchService],
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;
  @Input() isMenuCollapsed:boolean;
  @Output() onHide = new EventEmitter<boolean>();
  setHide(){
      this.onHide.emit(true);
  }

  constructor(private _service: SearchService) { }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((searchText) => this._service.search(searchText)),
    );
  }

  ngOnInit(): void {
  }

  resultFormatBandListValue(value: any) {            
    return value.name;
  }
  inputFormatBandListValue(value: any)   {
    if(value.name)
      return value.name
    return value;
  }

  onSelect($event) {
    $event.preventDefault();
    this.model = null;
  }
}
