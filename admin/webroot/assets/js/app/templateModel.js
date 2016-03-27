if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['./util/util'], function(Util) {
    var $ = {};
    var model = {};
    var idIndex = {};

    /**
     * Creates an index for a given key
     *
     * @param string keyToIndex - The key that exists in data, and will be
     * the primary key of the index
     * @param object data - The object for which to create an index
     */
    var _initIndex = function(keyToIndex, data) {
        var index = {};
        Util.recursiveWalk($, data, function(_, obj) {
            if (typeof obj[keyToIndex] !== 'undefined') {
                index[obj[keyToIndex]] = obj;
            }
        });

        return index;
    }

    /**
     * Find an object with a given id
     *
     * @param string id
     * @param object|array haystack
     * @return object
     */
    var _findObject = function(id, haystack) {
        var result = null;
        Util.recursiveWalk($, haystack, function(_, obj) {
            if (typeof obj !== 'undefined' && obj['id'] != id) {
                return true;
            }

            result = obj;
        });

        return result;
    }

    /**
     * Travese a nested object according to a given path and return the final
     * object
     *
     * @param object object
     * @param string[] path
     * @return object
     */
    var _findItemInObject = function(object, path) {
        var objRef = object;
        for (var i = 0; i < path.length; i++) {
            objRef = object[path[i]];
        }
        return objRef;
    }

    /**
     * Returns a model with a given modelName. If the model doesn't exist,
     * create one
     * @param string modelName
     * @return object
     */
    var _createModelIfNotExists = function(modelName) {
        if (typeof model[modelName] === 'undefined') {
            model[modelName] = {};
            model[modelName].data = {type : modelName};
        }
        return model[modelName];
    }

    /**
     * Creates a nested object
     *
     * @param string objectPath
     * @param object existingObject
     */
    var _createNestedObject = function(objectPath, existingObject) {
        var object = existingObject || {};
        var objectRef = object;

        for (var i = 0; i < objectPath.length; i++) {
            var path = objectPath[i];
            if (typeof objectRef[path] === 'undefined') {
                objectRef[path] = {};
            }
            objectRef = objectRef[path];
        }

        return object;
    };

    function TemplateModel(_$) {
        $ = _$;
    }

    TemplateModel.prototype.load = function(data) {
        var _model = {};

        Util.each($, data.data, function(_, item) {
            _model[item.data.type] = {
                data: item.data
            };
        });

        Util.recursiveWalk($, _model, function(_, target) {
            target['id'] = Math.random().toString(36).substring(12);
            return true;
        });

        model = _model;

        idIndex = _initIndex('id', model);
    }

    TemplateModel.prototype.getModelById = function(id) {
        return idIndex[id];
    }

    TemplateModel.prototype.getModelByType = function(type) {
        return model[type];
    }

    /**
     * @var string id
     * @var string modelName
     * @var string[] modelPath
     */
    TemplateModel.prototype.addNewModelEntry = function(id, modelName, modelPath) {
        if (modelPath.length === 0) {
            return;
        }

        var currModel = _createModelIfNotExists(modelName);
        var objectPath = modelPath.slice(0, modelPath.length - 1);

        _createNestedObject(objectPath, currModel);

        // The last path item should always be of type array
        var lastEntryKey = modelPath[modelPath.length - 1];
        var secondLastEntry = _findItemInObject(currModel, objectPath);
        if (typeof secondLastEntry[lastEntryKey] === 'undefined') {
            secondLastEntry[lastEntryKey] = [];
        }

        var newModelId = Math.random();
        var newModel = {id: newModelId};
        secondLastEntry[lastEntryKey].push(newModel);
        idIndex[newModelId] = newModel;

        return newModelId;
    }

    TemplateModel.prototype.deleteEntry = function(id) {
        var hasDeleted = false;
        Util.recursiveWalk($, model, function(_, currModel) {
            if (hasDeleted) {
                return false;
            }

            Util.each($, currModel, function(childModelIndex, childModel) {
                if (hasDeleted) {
                    return false;
                }

                if (typeof childModel === 'object'
                    && typeof childModel['id'] !== 'undefined'
                    && childModel['id'] == id
                ) {
                    delete currModel[childModelIndex];
                    hasDeleted = true;
                }
            });
        });

        return hasDeleted;
    }

    TemplateModel.prototype.save = function() {
        $.post('/api/save', {
            data: model
        });
    }

    return TemplateModel;
});
