-- Deploy microscope-web:cards_v2 to pg

BEGIN;

ALTER TABLE period
   RENAME COLUMN period_tone TO tone;

ALTER TABLE period
   ADD COLUMN "game_id" INT NOT NULL REFERENCES "game" ("id");

ALTER TABLE event
   RENAME COLUMN event_tone TO tone;

ALTER TABLE event
   ADD COLUMN "period_id" INT NOT NULL REFERENCES "period" ("id");
   
ALTER TABLE scene
   RENAME COLUMN scene_tone TO tone;

ALTER TABLE scene
   ADD COLUMN "event_id" INT NOT NULL REFERENCES "event" ("id");

ALTER TABLE focus
   RENAME COLUMN description TO text;

ALTER TABLE focus
   DROP COLUMN author_id,
   ADD COLUMN game_id INT NOT NULL REFERENCES "game" ("id"),
   ADD COLUMN author_id INT NOT NULL REFERENCES "user" ("id");

COMMIT;
