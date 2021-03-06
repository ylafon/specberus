/**
 * Pseudo-rule for metadata extraction: process.
 */

// 'self.name' would be 'metadata.process'

exports.check = function(sr, done) {
    var $processDocument = sr.$('a#w3c_process_revision');
    return done({process: $processDocument.attr('href')});
};
