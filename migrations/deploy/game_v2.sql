-- Deploy microscope-web:game_v2 to pg

BEGIN;

ALTER TABLE game
   ALTER COLUMN big_picture DROP NOT NULL,
   ALTER COLUMN state DROP NOT NULL,
   ALTER COLUMN bookend_start DROP NOT NULL,
   ALTER COLUMN bookend_start_tone DROP NOT NULL,
   ALTER COLUMN bookend_end DROP NOT NULL,
   ALTER COLUMN bookend_end_tone DROP NOT NULL;

COMMIT;
