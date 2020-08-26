var makeHulaDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.top = top;
  // this.left = left;
  // this.time = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="huladancer"></span>');
  // call the file to take a step
  this.setPosition(top, left);

};


makeHulaDancer.prototype = Object.create(MakeDancer.prototype);
makeHulaDancer.prototype.constructor = makeHulaDancer;

makeHulaDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  $('#' + this.id).animate({width: "20px"});
  $('#' + this.id).animate({width: "10px"});
};

