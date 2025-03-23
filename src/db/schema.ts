import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const incident = pgTable("incident", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
