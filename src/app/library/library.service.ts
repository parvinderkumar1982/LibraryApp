import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  getLibraries()
  {
    return this.http.get('https://aka-library-api.azurewebsites.net/api/libraries');
  }
}
