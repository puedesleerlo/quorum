import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { WordpressService } from "../wordpress.service";
import { Observable } from "rxjs";

@Injectable()
export class PostResolver implements Resolve<any> {
  constructor(private wordpress: WordpressService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    let slug = route.paramMap.get('slug');
    console.log(slug)
    return this.wordpress.getPost(slug)
  }
}