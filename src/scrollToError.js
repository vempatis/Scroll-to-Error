(function() {
'use strict';

angular.module('scrollToErrorModule',[]);

angular.module('scrollToErrorModule')
.factory('scrollToErrorService', function(){
    var scrollToErrorService = {
        scrollToError: function() {
            var invalidInputElements = [];
            var invalidElements = angular.element.find('.ng-invalid');        
            if (invalidElements.length > 0)
            {
                _.each(invalidElements,function(ele) {
                    if (ele.tagName.toLowerCase() == 'input' || ele.tagName.toLowerCase() == 'select' || ele.tagName.toLowerCase() == 'textarea' )
                        invalidInputElements.push(ele);    
                });
            }
            if(invalidInputElements.length > 0) {
                invalidInputElements[0].focus();
            } 
        }
    };
    return scrollToErrorService; 
});
})();