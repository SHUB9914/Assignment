import { Routes} from '@angular/router'
import {Homecomponent} from "./home/home.component";
import {Marketcomponent} from "./market/marketComponent"
import {BusinessComponent} from "./business/business";
import {CreateTaskComponent} from "./createTask/createTask";
import {ShowTaskComponent} from "./showTask/showTask";
import {SubmitTaskComponent} from "./submitTask/submitTask";

export const routes:Routes=[

  {
  path: 'createTask' ,
  component : CreateTaskComponent
  }
,
  {
  path: 'showTask' ,
  component : ShowTaskComponent
  },
  {
  path: 'submitTask/:id' ,
  component : SubmitTaskComponent
  }


  ];
