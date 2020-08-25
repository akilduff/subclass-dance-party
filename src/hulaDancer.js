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

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

makeHulaDancer.prototype = Object.create(MakeDancer.prototype);
makeHulaDancer.prototype.constructor = makeHulaDancer;

makeHulaDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // setTimeout(this.step, this.time);

  // MakeDancer.prototype.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(this.step, timeBetweenSteps);
  // };

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

