-- Verify microscope-web:init on pg

BEGIN;


SELECT * FROM "user", "game", "participation", "focus", "period", "event", "palette" WHERE false;


ROLLBACK;
