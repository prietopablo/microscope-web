Protéger datamapper contre injection
nous avons un problème sur lorsque l'on passe une value pour désigner la table de la requête. c'est un problème de simple / double quote

Requêtes SQL
SELECT * FROM "game";
SELECT * FROM "period" ORDER BY position;
SELECT * FROM "event";
SELECT * FROM "scene";


SELECT game.big_picture, game.bookend_start, game.bookend_start_tone, game.bookend_end, game.bookend_end_tone, game.current_user_id, 
"participation".player_id AS player_partipating, 
"period".text AS period_text, "period".tone AS period_tone, "period".position AS period_position,
"event".*
FROM "game" 
JOIN "participation" ON "game".id = "participation".game_id
JOIN "period" ON "game".id = "period".game_id
JOIN "event" ON "period".id = "event".period_id
WHERE "game".id = 1;

SELECT *
FROM "game", "period", "participation"
WHERE "game".id = 1;

SELECT *
FROM "period"
WHERE game_id = 1; 

SELECT *
FROM "period"
JOIN "event" ON "period".id = "event".period_id
WHERE "period".game_id = 1;