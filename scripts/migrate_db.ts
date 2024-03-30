import sqlite3 from "sqlite3";
import path from "node:path";
import { subscribe } from "@/lib/subscribe";

async function main() {
  const sqlite = sqlite3.verbose();

  // 1. Read ./d1469743-0f78-483d-90c4-b3303f1870be.sqlite3 file
  const dbPath = path.resolve(
    __dirname,
    "./d1469743-0f78-483d-90c4-b3303f1870be.sqlite3"
  );

  const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the database.");
    }
  });

  db.serialize(() => {
    db.all("SELECT * FROM submissions", async (err, rows) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(rows);
        for (const _row of rows) {
          const row = _row as any;
          if (row.account_id === "humanity2-0") {
            const form_id = row.form_id;
            if (form_id === "subscribe") {
              const data = JSON.parse(row.data);
              // Add to resend audience
              await subscribe({ email: data.email });
              console.log("Subscribed", data.email);

              // wait 2s
              await new Promise((resolve) => setTimeout(resolve, 2000));
            }
          }
        }
      }
    });
  });

  // Dump all tables
}

main();
