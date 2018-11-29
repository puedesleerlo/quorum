import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
  })
};
@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  url = "https://public-api.wordpress.com/rest/v1.1/sites/corporacionquorum.wordpress.com/posts/"

  constructor(public http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url);
  }

  getStickyPost() {
    var add = "?sticky=require"
    return this.http.get(this.url + add)
  }

  getNewPosts() {
    var add = "?number=4&stycky=exclude"
    return this.http.get(this.url + add)
  }

  getOffsetPosts() {
    var add = "?offset=4"
    return this.http.get(this.url + add)
  }

  getPost(slug) {
    var add = `slug:${slug}`
    return this.http.get(this.url + add)
  }

  getRelatedPost(id) {
    var add = `${id}/related`
    return this.http.post(this.url + add, 'size=3')
  }
}
