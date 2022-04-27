# Community Soundboard Template

A starter template for hosting a soundboard for a community.

## Description

A starter template on the PERN stack for hosting a soundboard for a community. The template utilizes Cloudinary's API for .mp3 hosting. The template has 4 user access levels. Admin, Moderator, Member, and New User. The template has data persistence by using a "deleted" boolean for handling deletes.

## Screenshots
<!-- ![Screenshot of Landing Page](/public/images/landingpage.png)
![Screenshot of Home](/public/images/home.png)
![Screenshot of Layers](/public/images/layers.png)
![Screenshot of Attributes](/public/images/attributes.png)
![Screenshot of Check Inputs](/public/images/checkinputs.png)
![Screenshot of Results](/public/images/results.png) -->

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `community_soundboard` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "access" INT NOT NULL,
    "soundboard_access" BOOLEAN NOT NULL
);

CREATE TABLE "soundclips" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" (id) ON DELETE CASCADE,
	"title" VARCHAR (80),
	"url" VARCHAR (1000),
	"username" VARCHAR (1000),
	"deleted" BOOLEAN DEFAULT false
);

CREATE TABLE "tags" (
	"id" SERIAL PRIMARY KEY,
	"tag" VARCHAR(30),
	"soundclip_id" INT REFERENCES "soundclips" (id) ON DELETE CASCADE
);

--Register an account through the application and run the following query to set that account as an admin.
UPDATE "user"
SET "access"=4
WHERE "id"=1;
```

If you would like to name your database something else, you will need to change `community_soundboard` to the name of your new database name in `server/modules/pool.js`
