const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup()
{
    canvas  = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();

    let options = 
    {
    mouse:canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

	pendulum1 = new Pendulum(350,350,"#e91e63");
	pendulum2 = new Pendulum(410,350,"#a9d2f1");
	pendulum3 = new Pendulum(470,350,"#e91e63");
	pendulum4 = new Pendulum(530,350,"#a9d2f1");
	pendulum5 = new Pendulum(590,350,"#e91e63");

	sling1 = new Sling(pendulum1.body,{x:350,y:200});
	sling2 = new Sling(pendulum2.body,{x:410,y:200});
	sling3 = new Sling(pendulum3.body,{x:470,y:200}); 
 	sling4 = new Sling(pendulum4.body,{x:530,y:200}); 
	sling5 = new Sling(pendulum5.body,{x:590,y:200});
}	
function draw()
{
    background("#c7acef");
    Engine.update(engine);
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}
function mouseDragged()
{
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}