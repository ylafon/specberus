/**
 * Pseudo-rule for metadata extraction: title.
 */

// 'self.name' would be 'metadata.title'

exports.check = function(sr, done) {
    var $title = sr.$("body div.head h1").first();
    if (!$title.length) {
        return done();
    } else {
        return done({title: sr.norm($title.text())});
    }
};
