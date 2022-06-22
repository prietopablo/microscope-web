-- Deploy microscope-web:game_v2 to pg

BEGIN;

-- We will create a game without every element registered
-- First the author will create the new game then all players will populate the game with data important to the beginning of the game

ALTER TABLE game
   ALTER COLUMN big_picture DROP NOT NULL,
   ALTER COLUMN state DROP NOT NULL,
   ALTER COLUMN bookend_start DROP NOT NULL,
   ALTER COLUMN bookend_start_tone DROP NOT NULL,
   ALTER COLUMN bookend_end DROP NOT NULL,
   ALTER COLUMN bookend_end_tone DROP NOT NULL;

COMMIT;
