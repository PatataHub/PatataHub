
if (typeof gdjs.evtsExt__ExtendedMath__QuarterPi !== "undefined") {
  gdjs.evtsExt__ExtendedMath__QuarterPi.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedMath__QuarterPi = {};

gdjs.evtsExt__ExtendedMath__QuarterPi.conditionTrue_0 = {val:false};
gdjs.evtsExt__ExtendedMath__QuarterPi.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ExtendedMath__QuarterPi.userFunc0xa9f6c0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = Math.PI / 4;
};
gdjs.evtsExt__ExtendedMath__QuarterPi.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedMath__QuarterPi.userFunc0xa9f6c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ExtendedMath__QuarterPi.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedMath__QuarterPi.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ExtendedMath__QuarterPi.registeredGdjsCallbacks = [];