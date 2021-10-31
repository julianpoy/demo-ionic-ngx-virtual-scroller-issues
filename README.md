# demo-ionic-ngx-virtual-scroller-issues


# Setup

`npm install`

`ionic serve`

# Bug re-creation

On IOS, scroll through the list - notice the jumping.

Most evident when scrolling quickly. Often when reaching the bottom of the list, the scroll position will jump directly back up to the top.

# Versions

All versions 5.4.2+ exhibit the bug. 5.4.1 and below do not.

The default branch has Ionic 5.4.2 and exhibits the bug.

The ionic-5.4.1 branch has Ionic 5.4.1 and does not exhibit the bug.

The ionic-5.8.4 branch has Ionic 5.8.4 and exhibits the bug.
