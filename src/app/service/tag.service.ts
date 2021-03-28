import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../model/tag';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private readonly tagsUrl: string;

  constructor(private http: HttpClient) {
    this.tagsUrl = environment.TAG_LAMBDA_API;
  }

  public findAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagsUrl);
  }

  public save(tag: Tag) {
    return this.http.post<Tag>(this.tagsUrl, tag);
  }
}
