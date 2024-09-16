import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  http = inject(HttpClient)
  router = inject(Router)
  
  cou ={
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

  city ={
    id: 0,
      name: "",
      lat: 0,
      lan: 0
  }

  addcity(){
    this.cou.cities = this.cou.cities.filter((q) => q.lan !== 0 )
    this.cou.cities.push(this.city)
    this.city ={
      id: 0,
      name: "",
      lat: 0,
      lan: 0
    }
  }

  addCounCity(){

    // this.cou.cities.shift()
    this.http.post('http://localhost:5299/api/CountryCity/AddConutryAndCity' , this.cou).subscribe((res :any)=>{
      console.log(res);
      this.router.navigateByUrl('')
      
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
