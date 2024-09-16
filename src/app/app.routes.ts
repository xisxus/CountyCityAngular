import { Routes } from '@angular/router';
import { GetAllComponent } from './Component/get-all/get-all.component';
import { createComponent } from '@angular/core';
import { EditComponent } from './Component/edit/edit.component';
import { CreateComponent } from './Component/create/create.component';

export const routes: Routes = [
    {path : '', component : GetAllComponent},
    {path : 'cr', component : CreateComponent},
    {path : 'up/:id', component : EditComponent}
];
