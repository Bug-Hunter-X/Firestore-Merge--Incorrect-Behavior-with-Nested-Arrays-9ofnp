The issue stems from attempting to update a document in Firestore using a nested object where the nested object's property is an array.  The `set()` method, when used with `merge: true`, does not correctly handle this scenario.  It replaces the entire nested object instead of merging the array within it. For instance, if you try to add an element to an array within a nested object, the entire nested object gets overwritten.

```javascript
db.collection('myCollection').doc('myDoc').update({
  nestedObject: {
    myArray: firebase.firestore.FieldValue.arrayUnion(newItem)
  }
}, {merge:true}).then(...)