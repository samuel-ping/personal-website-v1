# Changelog

This project doesn't really need a changelog. It's more for me than anyone else, but if you're looking here then hi!

## [Unreleased]

- More details in pages- use cards list for projects
- I just realized my scroll down arrow isn't centered with the resume buttons!
- Add familiar technologies to About tab, and organize it nicely
- In the navbar, show which tab you're currently in. Use state for this... probably. Can fill background color for tab changing effect. For reference: https://stackoverflow.com/questions/30376922/how-to-manage-active-state-in-bootstrap-navbar-in-react
- Add tooltips to icon buttons
- Add "scroll up" button at bottom of each navbar tab
- Make stuff fade in (use React-Motion?)
- Looks like navbar overlaps with scroll bar on mobile device
- Scrollbar support for Firefox?
- Credits are a little messed up on Firefox (too high), I made a temp solution but it bothers me
- Responsiveness can always use some work
- Fix favicon on Chrome... every solution I've tried hasn't worked yet
- Make resume icon more like a button like on Sydney's website :p But it might not as good, who knows

### How to update and redeploy website:

1. push changes- it may help to force the push using -f
2. bring other branch up to date with the one you just pushed changes to using "git rebase"
3. push changes for updated branch
4. run npm run deploy
5. don't forget to re-add custom domain in Github

##### Colors used: https://colorswall.com/palette/51884

## [1.1.3] - 2020-04-13

### Added

- Google Analytics but after a lot of tinkering it doesn't work anymore rip

### Changed

- Refreshing page shouldn't lead to 404 anymore
- Moved GA ID to .env file
- Code flow reorganized to be more logical
- Fixed headers
- Icons now responsive!
- Navbar vertical when screen is small enough!
- Added MIT license because why not!

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
