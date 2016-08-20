# angular-meteor-app
Angular + Meteor Playground

## Notes

When following the tutorials, they get you to add css to the files (later on they get you to add less). I preferred sass, so I installed it.

1) Add fourseven to project;
```
meteor add fourseven:scss
```
2) Add bootstrap to npm;
```
meteor npm install --save bootstrap@4.0.0-alpha.3
```
3) Add `main.scss` to project directory;
4) Insert the line below;
```scss
@import "../../{}/node_modules/bootstrap/scss/bootstrap.scss";
```
