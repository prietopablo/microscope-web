-- Revert microscope-web:init from pg

BEGIN;

<<<<<<< HEAD:migrations/revert/init.sql
DROP TABLE "user", "game", "participation", "focus", "period", "event", "scene", "palette";
=======
DROP TABLE "user", "game", "participation", "focus", "period", "event", "palette", "scene";
>>>>>>> 7a203fb601281832dd1bd4c42836127d7143d06b:data/migrations/revert/init.sql

DROP DOMAIN "email", "password";

COMMIT;
