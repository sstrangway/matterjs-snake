window.addEventListener('load', function() {
	
	// module aliases
    var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse;

    // create an engine
    var engine = Engine.create();
    engine.world.gravity.y = 0;

    // create a renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1000,
            height: 600,
            showAngleIndicator: true
        }
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80,
         { frictionAir: 0, friction: 0, frictionStatic: 0,});
    console.log(boxA);
    var ground = Bodies.rectangle(500, 600, 1000, 10, { isStatic: true });
    var top = Bodies.rectangle(500, 0, 1000, 10, { isStatic: true });
    var left = Bodies.rectangle(0, 300, 10, 600, { isStatic: true });
    var right = Bodies.rectangle(1000, 300, 10, 600, { isStatic: true });

    // add all of the bodies to the world
    World.add(engine.world, [boxA, ground, top, left, right]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
    
    document.onkeypress = function (e) {
        e = e || window.event;
        let keyCode = e.keyCode;

        console.log(e.keyCode);
        if (keyCode === 97 && boxA.velocity.x === 0){
            //a: 97
            Body.setVelocity( boxA, {x: -5, y: 0});
        } 
        if (keyCode === 100 && boxA.velocity.x === 0){
            //d: 100
            Body.setVelocity( boxA, {x: 5, y: 0});
        } 
        if (keyCode === 119 && boxA.velocity.y === 0){
            //d: 119
            Body.setVelocity( boxA, {x: 0, y: -5});
        } 
        if(keyCode === 115 && boxA.velocity.y === 0){
            //s: 115
            Body.setVelocity( boxA, {x: 0, y: 5});
        }
        console.log(boxA);
    };

});