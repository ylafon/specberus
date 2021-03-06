var profiles = require('../../../public/data/profiles.json');

const self = {
    name: 'headers.h2-status'
,   section: 'front-matter'
,   rule: 'dateTitleH2'
};

exports.check = function (sr, done) {

    var profileFound = false;
    var i, j;

    if (!sr.config.longStatus) return done();
    var $h2 = sr.getDocumentDateElement();
    if (!$h2 || !$h2.length) {
        sr.error(self, 'no-h2');
        return done();
    }
    var txt = sr.norm($h2.text());
    if (txt.indexOf("W3C " + sr.config.longStatus) !== 0)
        sr.error(self, 'bad-h2');

    i = 0;
    while (i < profiles.tracks.length && !profileFound) {
        j = 0;
        while (j < profiles.tracks[i].profiles.length && !profileFound) {
            var rx = new RegExp('^W3C ' + profiles.tracks[i].profiles[j].name + '( |,)', 'i');
            if (rx.test(txt)) {
                profileFound = true;
            }
            j ++;
        }
        i ++;
    }
    if (!profileFound)
        sr.error(self, 'bad-h2');

    done();

};
