import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class QueryResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    let query = route.paramMap.get('query');
    console.log(query)
    return this.http.post(environment.apiBlog + 'search', {});
  }
}