import { Component } from '@angular/core';
import { StorageDataService } from "./storage-data.service";
import { Storage } from './storage'
import {Response} from "@angular/http";

@Component({
  selector: 'storage-list',
  templateUrl: './storage-list.component.html',
  providers: [StorageDataService]
})
export class StorageListComponent{
  storages: Storage[];

  constructor(private dataService: StorageDataService){
  }

  ngOnInit(){
    this.dataService.getStorages().subscribe((res) => {
      console.log('sfasdfasdfsdfadsf');
      for (let storage of res){
        console.log(storage);
        // this.storages.push({name: storage.name, description: storage.description})
      }
    } ,  (error: any) => "asfasdfadsfa"+console.log(error), () => console.log('asdfasdfadsfads') );
  }
}
