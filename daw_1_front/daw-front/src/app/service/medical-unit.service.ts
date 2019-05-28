import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicalUnit } from '../models/medical-unit';
import { MyChartsData } from '../models/charts-data';

@Injectable({
  providedIn: 'root'
})
export class MedicalUnitService {

  private medicalUnitsUrlUrlPythonBackend = "http://localhost:7000/medicalUnits";
  private chartLink = "http://localhost:7000/medical-units-rating";
  private medicalUnitsUrl = "http://localhost:8000/api/medicalUnits";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'}); 

  constructor(private http:HttpClient) { }

  getAllMedicalUnits():Observable<Array<MedicalUnit>>{
    return this.http.get<Array<MedicalUnit>>(this.medicalUnitsUrl,{headers:this.headers});
  }
  getMedicalUnitById(id:number):Observable<MedicalUnit>{
    return this.http.get<MedicalUnit>(this.medicalUnitsUrl+'/'+id,{headers:this.headers});
  }
  deleteMedicalUnits(id:number):Observable<MedicalUnit>{
    return this.http.delete<MedicalUnit>(this.medicalUnitsUrlUrlPythonBackend+'/'+id,{headers:this.headers});
  }
  updateMedicalUnit(MedicalUnit:MedicalUnit, id:number):Observable<MedicalUnit>{
    return this.http.put<MedicalUnit>(this.medicalUnitsUrlUrlPythonBackend +'/'+id,MedicalUnit,{headers:this.headers});
  }
  addMedicalUnit(MedicalUnit:MedicalUnit):Observable<MedicalUnit>{
    return this.http.post<MedicalUnit>(this.medicalUnitsUrlUrlPythonBackend,MedicalUnit,{headers:this.headers});
  }
  getMedicalUnitChartData():Observable<Array<MyChartsData>>{
    return this.http.get<Array<MyChartsData>>(this.chartLink,{headers:this.headers});
  }
}
