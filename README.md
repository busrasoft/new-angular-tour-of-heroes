# Angular Tour Of Heroes
 
 - I created the project : ng new angular-tour-of-heroes
 - cd angular-tour-of-heroes
 - ng serve --open

 # Create component
 - ng generate component heroes

 # Create a Hero interface
  URL way : src/app/hero.ts

  # Create mock heroes
  URL way : src/app/mock-heroes.ts

  - The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.
  - Don't forget the asterisk (*) in front of ngFor. It's a critical part of the syntax.
  - Target event : <button (click)="onSave($event)">Save</button> 

  # Use the Angular CLI to generate a new component named hero-detail.
  - ng generate component hero-detail
    
  # Create the HeroService
  - ng generate service hero

  # Create MessagesComponent
  - ng generate component messages

  # Create the MessageService
  -  ng generate service message

  # Add the AppRoutingModule
  - ng generate module app-routing --flat --module=app

  # Add a dashboard view
  - ng generate component dashboard

  