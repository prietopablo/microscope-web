BEGIN;

INSERT INTO "user" ("username", "email", "password") VALUES
('jérémy', 'jeremy@gmail.com', 'motdepassedeJérémy?'),
('adlen', 'adlen@gmail.com', 'motdepassedeAdlen?'),
('victor', 'victor@gmail.com', 'motdepassedeVictor?'),
('pablo', 'pablo@gmail.com', 'motdepassedPablo?');

COMMIT;