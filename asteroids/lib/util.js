

const Util = {
  inherits (childClass, parentClass) {
      // let subclass = this;
      childClass.prototype = Object.create(parentClass.prototype);
      childClass.prototype.constructor = childClass;
    },

    // Scale the length of a vector by the given amount.
    scale (vec, m) {
      return [vec[0] * m, vec[1] * m];
    },


    // Return a randomly oriented vector with the given length.
    randomVec (length) {
      const deg = 2 * Math.PI * Math.random();
      return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    }



};

module.exports = Util;
