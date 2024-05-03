export interface Admin {
  id: string;
  login: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
}

export interface User {
  id: string;
  login: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
}

export interface PromoBanner {
  id: string;
  created_at: Date;
  created_by: string;
  meta_title: string;
  title: string;
  description: string;
  image: string;
  url: string;
  updated: boolean;
  updated_at: Date | null;
  updated_by: string;
  deleted: boolean;
  is_main: boolean;
}

export interface NewsCategory {
  id: string;
  created_at: Date;
  created_by: string;
  name: string;
  posts_count: number;
  color: string;
  slug: string;
  updated: boolean;
  updated_at: Date | null;
  updated_by: string;
  deleted: boolean;
}


export interface NewsPost {
  id: string;
  meta_title: string;
  title: string;
  category_id: string;
  created_at: Date;
  created_by: string;
  published_at: Date;
  image: string;
  slug: string;
  body: string;
  updated: boolean;
  updated_at: Date | null;
  updated_by: string;
  deleted: boolean;
  views: number;
}


export interface CryptoActivity {
  id: string;
  meta_title: string;
  title: string;
  created_at: Date;
  created_by: string;
  published_at: Date;
  image: string;
  slug: string;
  body: string;
  updated: boolean;
  updated_at: Date | null;
  updated_by: string;
  deleted: boolean;
  views: number;
}
