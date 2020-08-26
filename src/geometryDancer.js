var makeGeometryDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.top = top;
  // this.left = left;
  // this.time = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="geodancer"></span>');
  // call the file to take a step
  this.setPosition(top, left);

};

makeGeometryDancer.prototype = Object.create(MakeDancer.prototype);
makeGeometryDancer.prototype.constructor = makeGeometryDancer;

makeGeometryDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // setTimeout(this.step, this.time);

  $('#' + this.id).animate({'border-radius': '100px'}, 'slow');
  $('#' + this.id).animate({'border-radius': '0px'}, 'slow');
};

