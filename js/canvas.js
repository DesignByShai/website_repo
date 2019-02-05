function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(58, 255, 166)';
      ctx.fillRect(10, 10, 10, 10, 10,);
      ctx.strokeRect(10, 10, 10, 10);

    //   transparent rectangles
    //   ctx.fillStyle = 'rgb(200, 0, 0)';
    //   ctx.fillRect(10, 10, 50, 50);
    //   ctx.strokeRect(10, 10, 50, 50);

    //   ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    //   ctx.fillRect(30, 30, 50, 50);
    //   ctx.strokeRect(10, 10, 50, 50);

    //   triangles
        // ctx.beginPath();
        // ctx.moveTo(75, 50);
        // ctx.lineTo(100, 75);
        // ctx.lineTo(100, 25);
        // ctx.fill();

    
    //  arcs
        // ctx.beginPath();
        // ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        // ctx.moveTo(110, 75);
        // ctx.arc(75, 75, 35, 0, Math.PI, false);
        // ctx.moveTo(65, 65);
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(25, 25);
        // ctx.lineTo(105, 25);
        // ctx.lineTo(25, 105);
        // ctx.fill();

        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(45, 125);
        // ctx.closePath();
        // ctx.stroke();

        // making a cirlcular object
    //     for (var i = 0; i < 4; i++) {
    //         for (var j = 0; j < 3; j++){
    //             ctx.beginPath();
    //             var x = 25 + j * 50; // x coordinate
    //             var y = 25 + i * 50; // y coordinate
    //             var radius = 20; // arc radius
    //             var startAngle = 0; // starting point on circle
    //             var endAngle = Math.PI = (Math.PI * j) / 2; // end point on circle
    //             var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

    //             ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                
    //             if (i > 1) {
    //                 ctx.fill();
    //             } else {
    //                 ctx.stroke();
    //             }
    //     }
    //   }

    //quadratic curve
        // ctx.beginPath();
        // ctx.moveTo(75, 25);
        // ctx.quadraticCurveTo(25, 25, 25, 62.5);
        // ctx.quadraticCurveTo(25, 100, 50, 100);
        // ctx.quadraticCurveTo(50, 120, 30, 125);
        // ctx.quadraticCurveTo(60, 120, 65, 100);
        // ctx.quadraticCurveTo(125, 100, 125, 62.5);
        // ctx.quadraticCurveTo(125, 25, 75, 25);
        // ctx.stroke();

        // bezier curve
        
        // ctx.beginPath();
        // ctx.moveTo(75, 40);
        // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        // ctx.fill();

    }
  }