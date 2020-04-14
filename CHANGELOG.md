# Changelog

This project doesn't really need a changelog. It's more for me than anyone else, but if you're looking here then hi!

## [Unreleased]

- More details in pages- use cards list for projects
- Make the vertical navbar collapse
- Add familiar technologies to About tab, and organize it nicely
- Make stuff fade in (use React-Motion?)
- Scrollbar support for Firefox?
- Responsiveness can always use some work
- Google Analytics for all pages

##### How to update and redeploy website:

1. push changes- it may help to force the push using -f
2. bring other branch up to date with the one you just pushed changes to using "git rebase"
3. push changes for updated branch
4. run npm run deploy
5. don't forget to re-add custom domain in Github

##### Colors used: https://colorswall.com/palette/51884

## [1.1.13] - 2020-04-14

### Added

- Tooltips to icons!
- Navbar indicates current tab on both big screens and small!
- Scroll up button
- Changing tabs scrolls to top of tab

### Changed

- Thickened the down arrows
- Reorganized code
- Fiddled with fonts

### Fixed

- Fixed the credits at bottom
- Icons work much better on mobile now
- Fixed navbar on mobile! Now the whole button is actually the link, not just the text. This took a while to fix...

## [1.1.8] - 2020-04-13

### Added

- Google Analytics but it only works for homepage
- Added MIT license because why not!

### Changed

- Moved GA ID to .env file
- Code flow reorganized to be more logical
- Icons now responsive!
- Navbar vertical when screen is small enough!
- Favicon suddenly started working! Yay?

### Fixed

- Fixed headers
- Fixed refresh problem (https://github.com/facebook/create-react-app/issues/1765#issuecomment-443598257 is a goat)
- Centered the scroll arrows! And it's responsive.

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
