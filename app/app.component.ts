import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
   

    private friends: any[] = [
        {name: 'Avnesh', hobby: 'Coding'},
        {name: 'Kaushik', hobby: 'Coding'},
        {name: 'Archana', hobby: 'Cooking'},
        {name: 'Piyush', hobby: 'Singing'},
        {name: 'Archit', hobby: 'Sports'},
        {name: 'Hema', hobby: 'Hiking'},
        {name: 'Damodar', hobby: 'Gossiping'},
        {name: 'Anna', hobby: 'Biking'}
    ]
}
    