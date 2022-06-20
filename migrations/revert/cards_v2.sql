-- Revert microscope-web:cards_v2 from pg

BEGIN;

ALTER TABLE period
   ALTER COLUMN tone RENAME TO period_tone,
   DROP COLUMN "game_id";
ALTER TABLE event
   ALTER COLUMN tone RENAME TO event_tone,
   DROP COLUMN "period_id";
ALTER TABLE scene
   ALTER COLUMN tone RENAME TO scene_tone,
   DROP COLUMN "event_id";

ALTER TABLE focus
   ALTER COLUMN text RENAME TO description,
   DROP COLUMN game_id;

COMMIT;
