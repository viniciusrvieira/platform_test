import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

interface ApiError {
  error: {
    message: String;
    content?: String;
  };
}

interface Totals extends Partial<ApiError> {
  enterprises_count: Number;
  realties_count: Number;
  clients_count?: Number;
}

interface Client {
  _id: String;
  name: String;
  image_src: String;
  enterprises_count?: Number;
  realties_count?: Number;
  client_name?: String;
}

interface EClient extends Client, Partial<ApiError> {}
interface Clients extends Array<Client>, Partial<ApiError> {}

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Clients> {
    return this.http.get<Clients>(`${this.apiUrl}/enterprise`);
  }
  getByName(name: String): Observable<Clients> {
    return this.http.get<Clients>(`${this.apiUrl}/enterprise/name/${name}`);
  }

  getByClient(id: String): Observable<Clients> {
    return this.http.get<Clients>(`${this.apiUrl}/${id}/enterprise/`);
  }
  getByClientAndName(id: String, name: String): Observable<Clients> {
    return this.http.get<Clients>(
      `${this.apiUrl}/${id}/enterprise/name/${name}`
    );
  }
}
