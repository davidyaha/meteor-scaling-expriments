/**
 * Created by David Yahalomi on 07/11/2015.
 */

ScalingExperiments.Press = class Press {

  set id(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  static get collection() {
    if (!ScalingExperiments.Press._collection) {
      ScalingExperiments.Press._collection = new Mongo.Collection('presses');
    }

    return ScalingExperiments.Press._collection;
  }

  registerPress(x, y, id) {
    if (!this.id) {
      this.id = collection.insert({_id: id, x:x, y:y});
    } else if (this.id == id) {
        collection.update(id, {$set: {x:x, y:y}});
    }
  }

  removePress() {
    if (this.id) {
      collection.remove(id);
      this._id = null;
    }
  }
};

