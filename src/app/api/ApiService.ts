import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private api = process.env['PRODUCT_HUB_CORE_API']

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get(`${this.api}`);
    }

}