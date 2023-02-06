CREATE TABLE movies (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

ALTER TABLE quotes ADD COLUMN movie_id INTEGER REFERENCES movies(id);