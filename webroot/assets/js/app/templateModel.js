if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['./util/util'], function(Util) {
    var model = {};
    var idIndex = {};

    var _initIndex = function($, index, keyToIndex, data) {
        Util.recursiveWalk($, data, function(obj) {
            if (typeof obj[keyToIndex] !== 'undefined') {
                index[obj[keyToIndex]] = obj;
            }
        });
    }

    var _findObject = function($, id, haystack) {
        var result = null;
        Util.recursiveWalk($, haystack, function(obj) {
            if (typeof obj !== 'undefined' && obj['id'] != id) {
                return true;
            }

            result = obj;
        });

        return result;
    }

    return {
        init : function($, data) {
            var _model = {};

            Util.each($, data.data, function(_, item) {
                _model[item.data.type] = {
                    data: item.data
                };
            });

            Util.recursiveWalk($, _model, function(target) {
                target['id'] = Math.random();
                return true;
            });

            model = _model;

            _initIndex($, idIndex, 'id', model);
        },

        getModelById : function(id) {
            return idIndex[id];
        },

        getModelByType : function(type) {
            return model[type];
        },

        addNewModelEntry : function ($, id, modelName, modelPath) {
            var newModelId = Math.random();
            var currModel = model[modelName];
            var hasSetData = false;
            Util.each($, modelPath, function(_, path) {
                if (typeof currModel[path] !== 'undefined') {
                    currModel = currModel[path];
                    return true;
                }

                var newModel = {id: newModelId};
                currModel[path] = [newModel];

                idIndex[newModelId] = newModel;

                hasSetData = true;

                return false;
            });

            if (!hasSetData) {
                var newModel = {id: newModelId};
                currModel.push(newModel);

                idIndex[newModelId] = newModel;
            }

            return newModelId;
        },

        save : function($) {
            $.post('/api/save', {
                data: model
            });
        },
    };
});
