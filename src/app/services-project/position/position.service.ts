import { Injectable } from '@angular/core';

import { Position } from './../../models-project/positions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http:HttpClient) { }


  currentPosition: Position = null; //var para indicar a position atual
  allPositions: Position[]; //var para buscar indicar as positions cadastradas
  url = 'http://localhost:3000';

    //Acrescentar uma nova posição no banco:
    addPosition(newPosition:Position){
      return this.http.post(this.url+"/positions",newPosition);
    }

    //apresentar todos os titulos das positions cadastradas
    getAll(){
      return this.http.get<Position[]>(this.url+"/positions");
      
    }

    getPositions(job:string,category:string,district:string){
      let sql:string=""
      let first:boolean=true;
      if(job != ""){
        if(first){
          sql+="?title="+job
          first=false;
        }else{
          sql+="&title="+job
        }
      }
      if(category != "category"){
        if(first){
          sql+="?category="+category
          first=false;
        }else{
          sql+="&category="+category
        }
      }
      if(district != "all"){
        if(first){
          sql+="?city="+district
          first=false;
        }else{
          sql+="&city="+district
        }
      }
      return this.http.get<Position[]>(this.url+"/positions"+sql)
    }

    setPositions(positions:Position[]){
      this.allPositions=positions
    }
    
    //Retornar todas as posições de uma determinada empresa conforme e-mail logado
    getByEmail(email:string){
      return this.http.get<Position[]>(this.url+"/positions?email="+email);
    }

    getById(id:number){
      return this.http.get<Position>(this.url+"/positions/"+id);
    }

    //deletar uma position
    deletePosition(position:Position){
      return this.http.delete(this.url+"/positions/"+position.id)
    }

    //cadastrar um candidato na vaga
    apply(idUser:number,idJob:number){
      return this.http.post(this.url+"/userpositionrelation/",{usersId:idUser,positionsId:idJob})
    }

    getUserAndPosition(idPosition:number){
      return this.http.get(this.url + "/userpositionrelation?positionsId=" + idPosition + "&_expand=users&_expand=positions")
    }


}


