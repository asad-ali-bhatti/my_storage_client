import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {StorageListComponent} from "./storage-list.component";

@NgModule({
  imports: [CommonModule],
  declarations: [StorageListComponent],
  exports: [StorageListComponent]
})

export class StorageModule {
}
