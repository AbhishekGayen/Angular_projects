import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";

@Injectable({
    providedIn: 'root'  // Provide the service at the root level
})
export class DashboardService {
    apiUrl = `${environment.contextPath}`;

    constructor(private http: HttpClient) {}

    getIndexData(): Observable<any> {
        return this.http.get(this.apiUrl + '/api/index')
    }

    getData(): Observable<any> {
        return this.http.get(this.apiUrl + '/api/employees')
    }

    postData(reqParam: any): Observable<any> {
        return this.http.post(this.apiUrl + "/api/saveEmployee", reqParam);
    }

    updateData(requestParam: any): Observable<any> {
        return this.http.put(this.apiUrl + '/update', requestParam);
    }

    removeData(id: number) : Observable<any> {
        return this.http.delete(this.apiUrl + '/delete'+ id);
    }
}
