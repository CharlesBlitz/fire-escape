import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          password_hash: string;
          role: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          password_hash: string;
          role?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          password_hash?: string;
          role?: string;
          created_at?: string;
        };
      };
      videos: {
        Row: {
          id: string;
          title: string;
          description: string;
          youtube_url: string;
          thumbnail_url: string;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string;
          youtube_url: string;
          thumbnail_url?: string;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          youtube_url?: string;
          thumbnail_url?: string;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      galleries: {
        Row: {
          id: string;
          title: string;
          description: string;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      gallery_images: {
        Row: {
          id: string;
          gallery_id: string;
          image_url: string;
          caption: string;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          gallery_id: string;
          image_url: string;
          caption?: string;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          gallery_id?: string;
          image_url?: string;
          caption?: string;
          sort_order?: number;
          created_at?: string;
        };
      };
      blogs: {
        Row: {
          id: string;
          title: string;
          content: string;
          excerpt: string;
          featured_image: string;
          featured: boolean;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content?: string;
          excerpt?: string;
          featured_image?: string;
          featured?: boolean;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          excerpt?: string;
          featured_image?: string;
          featured?: boolean;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};