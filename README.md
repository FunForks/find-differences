# Find the Differences #
### A CSS-only game (no JavaScript) ###

[Demo](https://github.com/MERNCraft/find-differences)

This game uses the following CSS features:

* The `~` sibling operator to create selectors which affect
  the younger sibling of checkbox inputs, depending on their
  `:checked` pseudo-class
* The `:has()` pseudo-class, which was recently introduced. It has been available in Firefox and all other major browsers since December 2023
  The `:has()` pseudo-class and the `~` sibling operator are used together to create a complex selector which checks if you have found all the differences between the two pictures.
* Custom CSS properties, whose value can be changed
* [Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/counter) to calculate how many checkboxes there are, and how many have been checked
* The `::before` and `::after` pseudo-elements, which can be used:
  * To display the value of a counter
  * To react to the `:checked` state of an older sibling checkbox, in order to convert a checkbox into a slider
* `pointer-events: none` to allow the user to press elements covered by other elements
* `transform: rotate()` and individualized `border-<side>-radius` settings, to create custom shapes that closely ressemble the shapes of the differences to find.
* `filter: <set of filters>` to convert a black and transparent image into a tinted image with feathered edges
* A `@keyframe` animation to create a little movement that makes it easier to see selected areas
* A way to switch this off, for people who suffer from motion sickness.
