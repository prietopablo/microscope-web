-- Deploy microscope-web:init to pg
BEGIN;

CREATE DOMAIN "email" AS text
CHECK(
    value ~ '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'
);

CREATE DOMAIN "password" AS text
   CHECK (
   value ~ '(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}'
);


CREATE TABLE IF NOT EXISTS "user" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "username" TEXT NOT NULL UNIQUE,
   "email" email NOT NULL UNIQUE,
   "password" TEXT NOT NULL,
   "role" TEXT NOT NULL DEFAULT 'member',
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "game" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "big_picture" TEXT NOT NULL,
   "state" TEXT NOT NULL,
   "bookend_start" TEXT NOT NULL,
   "bookend_start_tone" BOOLEAN NOT NULL,
   "bookend_end" TEXT NOT NULL,
   "bookend_end_tone" BOOLEAN NOT NULL,
   "creator_id" INT NOT NULL REFERENCES "user" ("id"),
   "current_user_id" INT NOT NULL REFERENCES "user" ("id"),
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "participation" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "game_id" INT NOT NULL REFERENCES "game" ("id"),
   "player_id" INT NOT NULL REFERENCES "user" ("id"),
   "position" INT NOT NULL
);

CREATE TABLE IF NOT EXISTS "focus" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "description" TEXT NOT NULL,
   "author_id" INT NOT NULL REFERENCES "user" ("id"),
   "position" INT NOT NULL UNIQUE
);

-- We will not constrain the position column to the UNIQUE contraint to make future datamapper methods easier to implement
-- For instance, when we will create a new card it might takes a position already present on the game, it might generate bugs at first but we will take care of the problem in a future sprint
CREATE TABLE IF NOT EXISTS "period" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "text" TEXT NOT NULL,
   "period_tone" BOOLEAN NOT NULL,
   "position" INT NOT NULL 
);

CREATE TABLE IF NOT EXISTS "event" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "text" TEXT NOT NULL,
   "event_tone" BOOLEAN NOT NULL,
   "position" INT NOT NULL 
);

CREATE TABLE IF NOT EXISTS "scene" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "text" TEXT NOT NULL,
   "scene_tone" BOOLEAN NOT NULL,
   "position" INT NOT NULL 
);

CREATE TABLE IF NOT EXISTS "palette" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "text" TEXT NOT NULL,
   --We will decide that the false status will correspond to the "NO" part of the palette and of course the true status will correspond to the in quote "YES" to the yes part
   "status" BOOLEAN NOT NULL
   
);

COMMIT;

