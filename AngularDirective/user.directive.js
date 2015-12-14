/* user.directive.js */

/**
* @desc Anzeige-Direktive fuer die vollstaendige Adresse von Benutzern.
* @example <div full-user-address></div>
*/
angular
    .module('directiveApp')
    .directive('fullUserAddress', fullUserAddress);

function fullUserAddress() {
    var directive = {
        link: link,
        templateUrl: '/template/is/located/here.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}