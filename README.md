# MySplits App

Welcome to MySplits, a collaborative expense tracking application that helps users manage and split expenses within groups. With a user-friendly interface, MySplits simplifies the process of tracking shared expenses among friends, roommates, or travel buddies.

## Live Site
Check out the live version of MySplits: [MySplits Live](https://mysplit-hosting.onrender.com)

## Technologies Used
* **Frontend:** React.js, Redux, HTML, CSS
* **Backend:** Ruby on Rails, PostgreSQL
* **Deployment:** Render.com

## Features
### 1. Permanent Left Menu Bar
MySplits boasts a permanent left menu bar that provides users with quick and convenient navigation to their friends and groups without the need for frequent page refreshes. This feature enhances the user experience by maintaining a consistent menu structure throughout the app.

**Challenges:**

Designing a menu that remains visible and accessible across different sections of the app.
Integrating the menu with the rest of the UI elements and functionalities.

**Solutions:**

Created a responsive and fixed left menu bar that stays visible at all times.
Utilized React Router to manage navigation without full page reloads.
Incorporated Redux to manage the menu's active state and ensure seamless transitions.

### 2. Auto-Suggest User Invitations
To make it convenient for users to invite their friends to groups, MySplits employs an auto-suggest feature for user invitations. This feature streamlines the process of inviting friends by suggesting user profiles as users type in names or email addresses.

**Challenges:**

Integrating an auto-suggest component that dynamically fetches and displays user suggestions.
Matching and displaying relevant suggestions based on user input.

**Solutions:**

Integrated the 'react-autosuggest' package to provide auto-suggestion functionality.
Implemented server-side filtering to fetch and display relevant user suggestions.

For more information and to experience MySplits, visit the [live site](https://mysplit-hosting.onrender.com).
