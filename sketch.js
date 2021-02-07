const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var array1=[1,2,3,4,5];
console.log(array1);

var array2=[[1,2],[3,4],[5,6]];
console.log(array2);

function preload(){
    
}

function setup(){
    var canvas = createCanvas(500,650);
   engine = Engine.create();
   world = engine.world;

    drops=new Drops(200,30, 3);
    umbrella=new Umbrella(200,500,2,2);

}

function draw(){
    background(0);
    drops.display();
    umbrella.display();
}   

