/* emits: 'not-found' */

const self = {
    name: 'dummy.h2-foo'
};

exports.check = function (sr, done) {
    sr.checkSelector("h2.foo", self, done);
};
