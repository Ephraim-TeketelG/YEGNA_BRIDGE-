-- Create members table for volunteer/team members
create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  email text not null,
  role text not null,
  bio text,
  skills text,
  profile_image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create impact_stories table
create table if not exists public.impact_stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  author text not null,
  date timestamp with time zone default timezone('utc'::text, now()) not null,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.members enable row level security;
alter table public.impact_stories enable row level security;

-- RLS Policies for members
create policy "members_select_all" on public.members for select using (true);
create policy "members_insert_own" on public.members for insert with check (auth.uid() = user_id);
create policy "members_update_own" on public.members for update using (auth.uid() = user_id);
create policy "members_delete_own" on public.members for delete using (auth.uid() = user_id);

-- RLS Policies for impact_stories (read-only public)
create policy "impact_stories_select_all" on public.impact_stories for select using (true);
