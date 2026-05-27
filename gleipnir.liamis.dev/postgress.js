const { Client } = require('pg');

const client = new Client({
    host: '/var/run/postgresql',
    database: 'liam', // <-- Change this to your database name!
});

async function main() {
    try {
        await client.connect();
        console.log("Connected to database!\n");

        // ============================================================
        // CREATE THE TABLE
        // ============================================================
        // This creates a table called "games" with three columns:
        //   id    - a number that automatically counts up (1, 2, 3...)
        //   title - the name of the game
        //   score - a rating out of 10
        //
        // TRY IT: Add a new column by adding a line like:
        //   genre TEXT
        // so it looks like:
        //   score INT,
        //   genre TEXT
        // ============================================================

        await client.query(`
            CREATE TABLE IF NOT EXISTS games (
                id    SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                score INT
            )
        `);
        console.log("Table created (or already existed)!\n");


        // ============================================================
        // INSERT SOME ROWS
        // ============================================================
        // This adds some games to the table.
        //
        // TRY IT: Add your own games to the list below!
        //   Just follow the same pattern: ["Game Name", score]
        //
        // TRY IT: If you added a genre column above, change the inserts to:
        //   'INSERT INTO games (title, score, genre) VALUES ($1, $2, $3)'
        //   ["Minecraft", 9, "Sandbox"]
        // ============================================================

        const gamesToAdd = [
            ["Minecraft",         1],
            ["Stardew Valley",    100],
            ["Doom Eternal",      12],
            ["Cyberpunk 2077",    15],
            ["Elden Ring",        10],
        ];

        for (let game of gamesToAdd) {
            await client.query(
                'INSERT INTO games (title, score) VALUES ($1, $2)',
                game
            );
        }
        console.log("Games added!\n");


        // ============================================================
        // READ ALL ROWS
        // ============================================================
        // This reads every row from the table and prints them out.
        //
        // TRY IT: Change "SELECT *" to "SELECT title" to only get titles
        // TRY IT: Add "ORDER BY score DESC" before the semicolon
        //         to sort by highest score first
        // TRY IT: Add "LIMIT 3" to only get the first 3 results
        // ============================================================

        console.log("--- All Games ---");
        const allGames = await client.query('SELECT * FROM games');
        for (let game of allGames.rows) {
            console.log(`[${game.id}] ${game.title} - Score: ${game.score}/10`);
        }
        console.log();


        // ============================================================
        // READ WITH A FILTER
        // ============================================================
        // This only gets games with a score of 9 or higher.
        //
        // TRY IT: Change the number to get different results
        // TRY IT: Change > to < to get games BELOW a score instead
        // TRY IT: Change > to = to get games with an EXACT score
        // ============================================================

        console.log("--- Great Games (score >= 9) ---");
        const greatGames = await client.query(
            'SELECT * FROM games WHERE score >= $1',
            [9]
        );
        for (let game of greatGames.rows) {
            console.log(`${game.title} scored ${game.score}/10`);
        }
        console.log();


        // ============================================================
        // UPDATE A ROW
        // ============================================================
        // This changes the score of Cyberpunk 2077 to 9
        // (it got better after patches!)
        //
        // TRY IT: Change the score to a different number
        // TRY IT: Change the title to update a different game
        // TRY IT: Update ALL scores at once by removing the WHERE clause
        //         (careful - this changes every single row!)
        //   'UPDATE games SET score = $1'
        // ============================================================

        await client.query(
            'UPDATE games SET score = $1 WHERE title = $2',
            [9, "Cyberpunk 2077"]
        );
        console.log("Updated Cyberpunk score!\n");


        // ============================================================
        // READ ONE ROW
        // ============================================================
        // This reads just the Cyberpunk row to confirm our update worked.
        // .rows[0] gets the first (and in this case only) result.
        //
        // TRY IT: Change the title to look up a different game
        // TRY IT: Search by id instead:
        //   'SELECT * FROM games WHERE id = $1'  with  [1]
        // ============================================================

        const updatedGame = await client.query(
            'SELECT * FROM games WHERE title = $1',
            ["Cyberpunk 2077"]
        );
        const game = updatedGame.rows[0];
        console.log("--- Updated Game ---");
        console.log(`${game.title} new score: ${game.score}/10\n`);


        // ============================================================
        // DELETE A ROW
        // ============================================================
        // This deletes Doom Eternal from the table.
        //
        // TRY IT: Change the title to delete a different game
        // TRY IT: Delete by score instead:
        //   'DELETE FROM games WHERE score < $1'  with  [8]
        //   This deletes all games with a score below 8
        //
        // WARNING: Dont try this unless you want to delete EVERYTHING:
        //   'DELETE FROM games'   (no WHERE clause = deletes all rows!)
        // ============================================================

        await client.query(
            'DELETE FROM games WHERE title = $1',
            ["Doom Eternal"]
        );
        console.log("Deleted Doom Eternal!\n");


        // ============================================================
        // FINAL READ - See the end result
        // ============================================================

        console.log("--- Final Game List ---");
        const finalGames = await client.query(
            'SELECT * FROM games ORDER BY score DESC'
        );
        for (let game of finalGames.rows) {
            console.log(`[${game.id}] ${game.title} - Score: ${game.score}/10`);
        }
        console.log();


        // ============================================================
        // CLEAN UP - Drop the table so you can run the program again!
        // ============================================================
        // This deletes the ENTIRE table (not just the rows, the whole thing)
        // This is useful here so you can run the program over and over.
        //
        // TRY IT: Comment this out (put // in front of each line)
        //         and run the program again. You will get an error because
        //         the table already exists... except you wont because we 
        //         used IF NOT EXISTS! The old data will still be there though.
        // ============================================================

        await client.query('DROP TABLE games');
        console.log("Cleaned up - table deleted!");

    } catch (err) {
        console.error("Something went wrong:", err);
    } finally {
        await client.end();
    }
}

main();

