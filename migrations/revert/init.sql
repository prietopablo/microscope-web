-- Revert microscope-web:init from pg

BEGIN;

DROP TABLE "user", "game", "participation", "focus", "period", "event", "palette", "scene";

DROP DOMAIN "email", "password";

COMMIT;
