import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

//to pass Api key
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization':'563492ad6f91700001000001f913040dcdad4c85ae6c515c448b464a'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PexelsphotoService {

  constructor(private http: HttpClient) { }

  //photos Api
  getData(search,page): Observable<any> {
    const url = "https://api.pexels.com/v1/search?query="+search+"&per_page=20&page="+page;
    return this.http.get<any>(url,httpOptions)
                    .pipe(catchError(this.errorhandler))
  }

  //ideos Api
  getVideoData(search,page): Observable<any> {
    const url = "https://api.pexels.com/videos/search?query="+search+"&per_page=20&page="+page;
    return this.http.get<any>(url,httpOptions)
                    .pipe(catchError(this.errorhandler))
  }

  //Curated photos Api
  getCuratedPhoto(): Observable<any> {
    const url = "https://api.pexels.com/v1/curated?per_page=1"
    return this.http.get<any>(url,httpOptions)
                    .pipe(catchError(this.errorhandler))
  }
  

  errorhandler(error){
    return throwError(error.message)
  }

}
