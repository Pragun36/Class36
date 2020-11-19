class Form{
constructor(){}

display(){
var title = createElement("h2");
title.html("Car Game");
title.position(250,50)
var input = createInput("Enter Your Name");
input.position(250,200);
var button  = createButton("Play");
var greeting = createElement("h3");
button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount = playerCount + 1
player.update(name);
player.updateCount(playerCount);
greeting.html("This is the tale of " + name);
greeting.position(250, 250);})}}