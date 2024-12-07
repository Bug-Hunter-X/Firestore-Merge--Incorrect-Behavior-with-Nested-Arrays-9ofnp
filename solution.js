The problem can be avoided by updating the nested array in a separate operation. This ensures the existing nested object and its other properties are preserved.

```javascript
db.collection('myCollection').doc('myDoc').update({
  'nestedObject.otherProperty': 'preservedValue'
}).then(() => {
  db.collection('myCollection').doc('myDoc').update({
    'nestedObject.myArray': firebase.firestore.FieldValue.arrayUnion(newItem)
  });
});
```

This solution involves two separate `update()` calls. First, the existing values of the nested object are updated (except the array). Second, a dedicated update modifies the array within the nested object.  This two-step approach guarantees the merge function works as expected without overwriting the entire nested object.