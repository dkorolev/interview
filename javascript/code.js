// The program demonstrates running five asynchronous stages sequentially.

function genStages() {
  var stages = [];
  for (var i = 1; i <= 5; ++i) {
    stages.push(function(next) {
      console.log('Stage ' + i);
      next();
    });
  }
  return stages;
};

function runStagesOneAfterAnother(xs, next) {
  var i = 0;
  function inner() {
    if (i == xs.length) next();
    else xs[i++](inner);
  };
  inner();
};

runStagesOneAfterAnother(genStages(), function() {
  console.log('Done!');
});
