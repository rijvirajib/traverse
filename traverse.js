'use strict';

const traverse = (river, velocity) => {
  // Can jump over fully
  if (velocity >= river.length) {
    return true;
  }

  // Try velocity - 1
  if (velocity - 2 > 0 && river.substr(velocity - 2, 1) === '*') {
    if (traverse(river.substr(velocity - 1), velocity)) {
      return true;
    }
  }

  // Try velocity
  // This means that if you are at velocity of 1,
  // you will look at the next rock in the river
  // and if you are at a velocity of 2, you would
  // look at the second object from left
  if (river.substr(velocity - 1, 1) === '*') {
    // we can attempt to continue
    if (traverse(river.substr(velocity), velocity)) {
      return true;
    }
  }

  // Try velocity + 1
  // This means if you are at a velocity of 1,
  // you are skipping the first object and looking
  // at the second object
  if (river.substr(velocity, 1) === '*') {
    if (traverse(river.substr(velocity + 1), velocity + 1)) {
      return true;
    }
  }

  // Give up
  return false;
}


module.exports = function (river) {
  // If river starts with a river, we need to fail
  if (river.substr(0, 1) === '~') {
    return false;
  }

  // First step is special, because we cannot decelerate,
  // so remove the first rock and set us to velocity of 1
  return traverse(river.substr(1), 1);
};
