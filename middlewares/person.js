'use strict';

module.exports = (req, res, next) => {
    if (req.query.person) {
        console.log(req.query.person);
        req.person = req.query.person.toUpperCase();
        next();
    } else {
        next('no person name provide');
    }
}