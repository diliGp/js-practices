/**
 * Revealing module pattern lets us allow users to reveal only certain/required amount of modules
 * instead of all the properties.
 * 
 * @definition: Module pattern is a commonly used Design Pattern which is used to wrap a 
 * set of variables and functions together in a single scope.
 * 
 */

 const people = function() {
    const name = 'Guarav';
    
    function _getToken() {
        return 'skjkjsd6qte8q48q98qzncbs89csa8cc6';
    }

    return {
        sayName() {
            return name;
        },
        isLoggedIn(token) {
            return !!(token && _getToken() === token)
        }
    }
 };

 const p = people();
 console.log(p.sayName(), '====');
 console.log(p.isLoggedIn('skjkjsd6qte8q48q98qzncbs89csa8cc6'));