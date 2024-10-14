PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_leads_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_leads_table`("id", "name", "age") SELECT "id", "name", "age" FROM `leads_table`;--> statement-breakpoint
DROP TABLE `leads_table`;--> statement-breakpoint
ALTER TABLE `__new_leads_table` RENAME TO `leads_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
