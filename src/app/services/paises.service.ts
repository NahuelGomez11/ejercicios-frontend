import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { RootObject, Flags } from "src/app/interfaces/paises.interface"
// import { IProductData, IproductResultados } from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class paisesService {
    constructor(private http: HttpClient){}
    // https://restcountries.com/v2/name/
    paises_traerTodos = () => this.http.get<RootObject[]>(`https://restcountries.com/v2/all`)
    paises_traerPais = (nombre: string) => this.http.get<RootObject[]>(`https://restcountries.com/v2/name/${nombre}`)
    traer_continentes = (continente: string) => this.http.get<RootObject[]>(`https://restcountries.com/v2/region/${continente}`);
}
