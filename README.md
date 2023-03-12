# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Description

This app seeks to create a fun and interactive user experience where the user can share their opinion of restaurants and explore the "Rants" of other users. For this app to work properly we will need to use all of the "CRUD" methods to move data between the front and back ends. Additionally we aim to make the user interface beautiful an easy to use.

## Colors

- #381566
- #893EFF
- #A5D825
- #58AF33

## Routes

| Method | Path                 | Purpose                                          |
| ------ | -------------------- | ------------------------------------------------ |
| Get    | /                    | Home Page                                        |
| Get    | /places              | Places index page                                |
| Post   | /places              | Create new place                                 |
| Get    | /places/new          | Form page for creating a new place               |
| Get    | /places/:id          | Details about a particular place                 |
| Put    | /places/:id          | Update a particular place                        |
| Get    | /places/:id/edit     | Form page for editing an existing place          |
| Delete | /places/:id          | Delete a particular place                        |
| Post   | /places/:id/rant     | Create a rant (comment) about a particular place |
| Delete | /places/:id/rant/:id | Delete a rant (comment) about a particular place |
| Get    | \*                   | 404 page (matches any route not defined above)   |

## Data Models

### places

| Field    | Type      |
| -------- | --------- |
| id       | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |
