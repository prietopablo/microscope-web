-- Verify microscope-web:cards_v2 on pg

BEGIN;

SELECT period.tone, period.game_id, event.tone, event.period_id, scene.tone, scene.event_id, focus.text, focus.game_id, focus.author_id FROM  period, event, scene, focus WHERE false;

ROLLBACK;
