// Creates and returns a new dancer object that can step

var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.time = timeBetweenSteps;
  this.id;


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // call the file to take a step
  this.step();
  this.setPosition(top, left);
  this.$node.mouseover(function(event) {

    //mouseover makes the object BIG!
    $('#' + this.id).css('border', '20px solid red');

    //mouseover makes the near object
    // identify the specific node we're mousing over
    var startingNodeLeftValue = parseInt(this.style.left);
    var startingNodeTopValue = parseInt(this.style.top);
    // initialize a closest node as the first node
    if (this.id === '1') {
      var closestNode = window.dancers[1];
    } else {
      var closestNode = window.dancers[0];
    }
    var leftLoc = parseInt(closestNode.left);
    var topLoc = parseInt(closestNode.top);
    // calc sum of squares for distance
    var minDist = Math.pow((leftLoc - startingNodeLeftValue), 2) + Math.pow((topLoc - startingNodeTopValue), 2);
    // iterate over the array of nodes to set min distance
    for (var i = 0; i < window.dancers.length - 1; i++) {
      var inspectNode = window.dancers[i];
      leftLoc = parseInt(inspectNode.left);
      topLoc = parseInt(inspectNode.top);
      if (this.id === (i + 1).toString()) {
        // continue
      } else {
        var dist = Math.pow((leftLoc - startingNodeLeftValue), 2) + Math.pow((topLoc - startingNodeTopValue), 2);
        console.log(dist);
        if (dist < minDist) {
          minDist = dist;
          closestNode = window.dancers[i];
        }
      }
    }
    console.log(closestNode);
    $('#' + closestNode.id).css('border', '20px solid white');
    // once we mouseover a dancer one time we get the closest
    // when we mouseover again the closest function breaks
  });

};


MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.time);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body