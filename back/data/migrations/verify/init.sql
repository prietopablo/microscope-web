-- Verify microscope-web:init on pg

BEGIN;


SELECT * FROM "user", "game", "participation", "focus", "period", "events", "palette" WHERE false;


ROLLBACK;
