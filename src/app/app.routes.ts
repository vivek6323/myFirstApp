import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { AppGaurdService } from './app-gaurd-service';
import { AppDeactivateGaurdService } from './app-deactivate-gaurd-service';
import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Dynamicform } from './dynamicform/dynamicform';
import { FormBuilder } from '@angular/forms';
import { Formbuilderexample } from './formbuilderexample/formbuilderexample';
import { Pipeexample } from './pipeexample/pipeexample';

export const routes: Routes = [
{path:"", component:App},
{path:"about/:id/:name", component:About},
{path:"contact", component:Contact, canActivate:[AppGaurdService],  children:[{path:':id/:name', component:About, canDeactivate:[AppDeactivateGaurdService]}]
},
{path:"templatedrivenforms", component:TemplateForm},
{path:"reactiveforms", component:ReactiveForm},
{path:"dynamicforms", component:Dynamicform},
{path:"formbuilderexample", component:Formbuilderexample},
{path:"pipe", component:Pipeexample}


];
