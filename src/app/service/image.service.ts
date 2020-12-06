import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('file', image);

    return this.http.post('http://localhost:8080/api/file/upload/image', formData);
  }
}
