define(function() {
    return {
        recursiveWalk : function(nodes, handler) {
            var shouldContinue = true;
            var _findNode = function(_, currentNode) {
                if (!shouldContinue || typeof currentNode !== 'object') {
                    return;
                }

                shouldContinue = handler(currentNode);

                if (!shouldContinue) {
                    return false;
                } else {
                    $.each(currentNode, _findNode);
                    return true;
                }
            };

            _findNode(null, nodes);
        }
    }
});
