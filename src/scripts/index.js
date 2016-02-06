
require('../scss/base.scss');

require(['./bear'], function (bear) {
    document.body.appendChild(bear[0]);
});
