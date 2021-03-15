import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag } from '../model/tag';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private tagsUrl: string;

  constructor(private http: HttpClient) {
    this.tagsUrl = environment.serverUrl + "/tags";
  }

  public findAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagsUrl);
  }

  public save(tag: Tag) {
    return this.http.post<Tag>(this.tagsUrl, tag);
  }
}
