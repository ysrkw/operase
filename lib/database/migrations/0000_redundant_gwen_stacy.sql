CREATE TABLE "group" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "memberships" (
	"group_id" varchar NOT NULL,
	"user_id" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "passwords" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"hash" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"email" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_group_id_group_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."group"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "passwords" ADD CONSTRAINT "passwords_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;