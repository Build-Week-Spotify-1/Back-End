# Back-End

[Product Vision Document](https://docs.google.com/document/d/1mfx4VSyZvkC7BVNo1Vz5nHS8Sx7mu_JJmQVh0p0T9o8/)

#### Deployed at

https://spotify-suggester.herokuapp.com/

## API Endpoints

| Type | Endpoints          | Description    |
| ---- | ------------------ | -------------- |
| POST | /api/auth/register | Register       |
| POST | /api/auth/login    | Login          |
| GET  | /api/users         | get all users  |
| GET  | /api/users/:id     | get user by id |
| PUT  | /api/users/:id     | update a user  |

### User Schema

| name       | type            | required |
| ---------- | --------------- | -------- |
| username   | string (unique) | yes      |
| password   | string          | yes      |
| first_name | string          | yes      |
| last_name  | string          | yes      |
