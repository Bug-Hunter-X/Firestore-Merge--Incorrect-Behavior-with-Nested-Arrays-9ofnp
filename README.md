# Firestore Merge Issue with Nested Arrays

This repository demonstrates an uncommon bug in Firebase Firestore's `update()` method when using `merge: true` with nested objects containing arrays. The issue involves the unexpected replacement of the entire nested object instead of merging the array as intended.

## Problem Description

When updating a document using `update()` with `merge: true`, if a nested object contains an array, and you attempt to modify the array using `FieldValue.arrayUnion()` or similar methods, the entire nested object is overwritten, losing any other properties within that object.

## Solution

The recommended solution involves restructuring the data or performing separate update operations for the nested object and its array.  The solution file provides an alternative approach using two separate `update()` calls to resolve this issue. 

## Reproduction

1. Clone this repository.
2. Install Firebase: `npm install firebase`
3. Configure Firebase in `bug.js` with your project details.
4. Run `node bug.js` to observe the incorrect merging behavior.
5. Run `node solution.js` to see how the issue can be resolved.