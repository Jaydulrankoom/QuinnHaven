import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const portfolioProjects = sqliteTable('portfolio_projects', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  category: text('category'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const blogPosts = sqliteTable('blog_posts', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content'),
  excerpt: text('excerpt'),
  imageUrl: text('image_url'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});
