$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.id = window.dancers.length;
    dancer.$node.attr('id', dancer.id.toString());
  });

  $('.addDancerButton1').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.id = window.dancers.length;
    dancer.$node.attr('id', dancer.id.toString());
  });

  $('.addDancerButton2').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.id = window.dancers.length;
    dancer.$node.attr('id', dancer.id.toString());
  });

  $('.lineUp').on('click', function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      console.log(dancer);
      dancer.setPosition(150, i * 100);
      // is there a way we can do this as a percent?
      // not a thing to try until all functionality works
    }
  });

});

