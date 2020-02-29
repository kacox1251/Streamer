USE streamerDB;

INSERT INTO shows (api_id, title, poster_path, media_type, want_to_watch, watching, completed, createdAt, updatedAt, UserId) 
VALUES (278, "The Shawshank Redemption", "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg", "movie", TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO shows (api_id, title, poster_path, media_type, want_to_watch, watching, completed, createdAt, updatedAt, UserId) 
VALUES (597, "Titanic", "/kHXEpyfl6zqn8a6YuozZUujufXf.jpg", "movie", TRUE, FALSE, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO shows (api_id, title, poster_path, media_type, want_to_watch, watching, completed, createdAt, updatedAt, UserId) 
VALUES (109445, "Frozen", "/eFnGmj63QPUpK7QUWSOUhypIQOT.jpg", "movie", FALSE, FALSE, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO shows (api_id, title, poster_path, media_type, want_to_watch, watching, completed, createdAt, updatedAt, UserId) 
VALUES (66732, "Stranger Things", "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", "tv", FALSE, TRUE, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO shows (api_id, title, poster_path, media_type, want_to_watch, watching, completed, createdAt, updatedAt, UserId) 
VALUES (474512, "The Legend of the Blue Sea", "/fL89Bss7pPqLWXCIXXKbCRjz6F8.jpg", "tv", FALSE, TRUE, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO shows (api_id, title, poster_path, media_type, want_to_watch, watching, completed, createdAt, updatedAt, UserId) 
VALUES (1408, "House", "/lxSzRZ49NXwsiyHuvMsd19QxduC.jpg", "tv", FALSE, FALSE, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

SELECT * FROM shows;