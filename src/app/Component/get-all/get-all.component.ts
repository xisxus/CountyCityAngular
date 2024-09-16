import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-all',
  standalone: true,
  imports: [JsonPipe, CommonModule,RouterLink],
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent implements OnInit {
  ngOnInit(): void {
    this.getAll()
  }

  http = inject(HttpClient)
  getc : any[] = []

  getAll(){
    this.http.get('http://localhost:5299/api/CountryCity/GetAllCountriesWithCities').subscribe((res:any)=>{
      this.getc = res
      console.log(this.getc);
      
    })
  }

  delte(id : any){
    this.http.delete("http://localhost:5299/api/CountryCity/DeleteCountryAndCities/"+id).subscribe((res:any)=>{
      alert('deleted')
      this.getAll()
    })
  }

}
