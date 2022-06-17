-- Revert microscope-web:game_v2 from pg

BEGIN;


ALTER TABLE game
   ALTER COLUMN big_picture SET NOT NULL,
   ALTER COLUMN state SET NOT NULL,
   ALTER COLUMN bookend_start SET NOT NULL,
   ALTER COLUMN bookend_start_tone SET NOT NULL,
   ALTER COLUMN bookend_end SET NOT NULL,
   ALTER COLUMN bookend_end_tone SET NOT NULL;

COMMIT;
