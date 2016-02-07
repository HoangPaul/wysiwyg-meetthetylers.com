define(function() {
    return {
        recursiveWalk : function(nodes, handler) {
            var shouldContinue = true;
            var _findNode = function(_, currentNode) {
                if (!shouldContinue || typeof currentNode !== 'object') {
                    return;
                }

                shouldContinue = handler(currentNode);

                if (shouldContinue) {
                    $.each(currentNode, _findNode);
                    return true;
                } else {
                    return false;
                }
            };

            _findNode(null, nodes);
        }
    }
});
