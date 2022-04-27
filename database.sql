--Database for community_soundboard

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
--Database for qq_bearz

-- "users" table for logging in.
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

-- 