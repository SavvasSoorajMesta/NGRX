
import {Injectable} from '@angular/core';
import { Model, Server } from 'miragejs';
import { createServer } from 'miragejs';
import { initialState } from 'src/app/post/state/post.state';
import * as AuthResponse from 'src/app/MockServer/Auth/Auth.response.json'
import { AuthResponseData } from 'src/app/model/AuthResponseData.model';
@Injectable({
  providedIn: 'root'
})

export  class APIService {

  public mockServer():Server {
    return createServer({
      models: {
        data: Model,
      },
      routes() {
        let newId =1;
        this.namespace = 'api';

        this.get('/users', () => {
          return {
            "counter": "0",
            "authorName": 'sooraj'
        }
        })
        this.post('/LoginAuth', (schema, request) => {
          let attrs = JSON.parse(request.requestBody)
          const AuthResponse: AuthResponseData = {
              idTocken: "wjneidnn&^&VYV",
              email: attrs.email,
              authUser: true
          }
          if(attrs.email === 'test@gmail.com' && attrs.password === '123456'){
            return new Response(null);
          }
          debugger
          console.log(schema)
          console.log(attrs)
          attrs.id = newId++;
          return AuthResponse
        })
        this.get('/gettestApi', (schema) => {
          return schema
        })
        this.post("/gettestApi", (schema, request) => {
          let attrs = JSON.parse(request.requestBody)
          debugger
          console.log(schema)
          console.log(attrs)
          attrs.id = newId++;
          return { data: attrs }
        });

        
      },
    });
  }
  
}