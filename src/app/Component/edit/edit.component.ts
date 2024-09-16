import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [JsonPipe, CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  ngOnInit(): void {
   this.idee = this.route.snapshot.paramMap.get('id')
     this.http.get('http://localhost:5299/api/CountryCity/GetCountryWithCitiesById/'+ this.idee).subscribe((res:any)=>{
      this.cou2 = res
      this.transform()
      
     })
  }
  
 idee : any 

  route = inject(ActivatedRoute)
  http = inject(HttpClient)
  nav = inject(Router)


  cou2 ={
    country : {
      id: 0,
      name: "",
      isO3: "",
      isO2: "",
      cities: []
    },
    cities : [
      {
        id: 0,
          name: '',
          lat: 0,
          lan: 0
          
      }
    ]
  }


  transform(){
    this.cou = this.cou2.country
    this.cou.cities = this.cou2.cities
   
    this.cou.cities = JSON.parse(JSON.stringify(this.cou.cities, (key, value) => {
      return key === '$id' || key === 'countryId' ? undefined : value;
    }));

    this.cou = JSON.parse(JSON.stringify(this.cou, (key, value) => {
      return key === '$id'  ? undefined : value;
    }));

    
    

  }



  cou ={
      id: 0,
      name: "",
      isO3: "",
      isO2: "",
      cities: [
        {
          id: 0,
          name: '',
          lat: 0,
          lan: 0
          
        }
      ]
    }
  

  city ={
    id: 0,
      name: "",
      lat: 0,
      lan: 0
  }

  addcity(){
    this.cou.cities = this.cou.cities.filter((q) => q.lan !== 0)
    this.cou.cities.push(this.city)
    this.city ={
      id: 0,
      name: "",
      lat: 0,
      lan: 0
    }
  }

  addCounCity(){

    
    this.http.put('http://localhost:5299/api/CountryCity/PutCountryAndCities/'+ this.idee , this.cou).subscribe((res :any)=>{
      console.log(res);
     alert("updated")

     this.nav.navigateByUrl('')

      
    })
  }

  onedi(obj: any){
    this.city = {...obj}
    this.ondeli(obj)
  }

  ondeli(obj: any){
    
    
    this.cou.cities = this.cou.cities.filter((q) => q !== obj)
  }




}
