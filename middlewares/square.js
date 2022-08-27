'use strict';

module.exports = (number) => {
    return (req, res, next) => {
       console.log(`square is ${number*number}`);
        next(); 
    }
    
}