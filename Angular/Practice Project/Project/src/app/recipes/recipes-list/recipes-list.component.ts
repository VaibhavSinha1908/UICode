import {Component} from '@angular/core'
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl : './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']

})

export class RecipesListComponent{
    recipes:Recipe[]=[
            new Recipe('A Test Recipe', 'This is a simple Test','https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg'),
            new Recipe('A Test Recipe', 'This is a simple Test','https://cdn.pixabay.com/photo/2018/08/30/10/22/plum-cake-3641833__340.jpg'),
            new Recipe('A Test Recipe', 'This is a simple Test','https://cdn.pixabay.com/photo/2016/09/04/22/07/antipasta-1645401__340.jpg'),


    ];
 
}