-- Deploy microscope-web:focus_v2 to pg

BEGIN;

ALTER TABLE focus
   DROP COLUMN position;

ALTER TABLE focus
   ADD COLUMN position int NOT NULL;

COMMIT;
