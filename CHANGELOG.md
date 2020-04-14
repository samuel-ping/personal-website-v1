# Changelog

This project doesn't really need a changelog. It's more for me than anyone else, but if you're looking here then hi!

## [Unreleased]

- Credits at bottom overlapping with buttons on everything but Chrome. Why Chrome?
- More details in pages- use cards list for projects
- Organize code so that each component gets its own CSS file
- Make the vertical navbar collapse
- Buttons are very small on mobile
- Add familiar technologies to About tab, and organize it nicely
- In the navbar, show which tab you're currently in. Use state for this... probably. Can fill background color for tab changing effect. For reference: https://stackoverflow.com/questions/30376922/how-to-manage-active-state-in-bootstrap-navbar-in-react
- Add tooltips to icon buttons
- Add "scroll up" button at bottom of each navbar tab
- Make stuff fade in (use React-Motion?)
- Scrollbar support for Firefox?
- Responsiveness can always use some work
- Google Analytics for all pages

### How to update and redeploy website:

1. push changes- it may help to force the push using -f
2. bring other branch up to date with the one you just pushed changes to using "git rebase"
3. push changes for updated branch
4. run npm run deploy
5. don't forget to re-add custom domain in Github

##### Colors used: https://colorswall.com/palette/51884

## [1.1.8] - 2020-04-13

### Added

- Google Analytics but it only works for homepage

### Changed

- Refreshing page shouldn't lead to 404 anymore
- Moved GA ID to .env file
- Code flow reorganized to be more logical
- Fixed headers
- Icons now responsive!
- Navbar vertical when screen is small enough!
- Added MIT license because why not!
- Fixed refresh problem (https://github.com/facebook/create-react-app/issues/1765#issuecomment-443598257 is a goat)
- Favicon suddenly started working! Yay?
- Centered the scroll arrows!

## [1.0.0] - 2020-04-12

### Changed

- Deployed website for the first time!
- Changed accent color from purple to red

## [0.0.1] - 2020-04-11

### Changed

- Get main website finished
- Update all the pages
- Add credits at bottom
- Scrolling down arrow works!
- Make navbar sticky!
- Add credits for icons
- Found icons that don't require attribution (they're from https://materialdesignicons.com/)
- Icon links only work on the icon part of the button, not the whole thing
- De-uglified mobile a bit

## [0.0.0.1] - 2020-04-10

### Changed

- Began the construction of this website
