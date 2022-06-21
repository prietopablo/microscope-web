-- Revert microscope-web:cards_v2 from pg

BEGIN;

ALTER TABLE period
   RENAME COLUMN tone TO period_tone;
ALTER TABLE period
   DROP COLUMN "game_id";
ALTER TABLE event
   RENAME COLUMN tone TO event_tone;
ALTER TABLE event 
   DROP COLUMN "period_id";
ALTER TABLE scene
   RENAME COLUMN tone TO scene_tone;
ALTER TABLE scene
   DROP COLUMN "event_id";

ALTER TABLE focus
   RENAME COLUMN text TO description;
ALTER TABLE focus
   DROP COLUMN game_id;

COMMIT;
