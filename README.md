# Back-End

[Product Vision Document](https://docs.google.com/document/d/1mfx4VSyZvkC7BVNo1Vz5nHS8Sx7mu_JJmQVh0p0T9o8/)

#### Deployed at

https://spotify-suggester.herokuapp.com/

## API Endpoints

| Method | Endpoints                     | Description           |
| ------ | ----------------------------- | --------------------- |
| POST   | /api/auth/register            | Register              |
| POST   | /api/auth/login               | Login                 |
| GET    | /api/users                    | Get all users         |
| GET    | /api/users/:id                | Get user by id        |
| PUT    | /api/users/:id                | Update a user         |
| POST   | /api/songs/faves              | Post song to faves    |
| GET    | /api/songs/:user_id/faves     | Get user's fave songs |
| DEL    | /api/songs/:user_id/faves/:id | Delete a fave song    |

### User Schema

| Name       | Type            | Required |
| ---------- | --------------- | -------- |
| username   | string (unique) | yes      |
| password   | string          | yes      |
| first_name | string          | yes      |
| last_name  | string          | yes      |

### Favorites Schema

| Name    | Type    | Required |
| ------- | ------- | -------- |
| user_id | integer | yes      |
| title   | string  | yes      |
| artist  | string  | yes      |
| album   | string  | no       |
