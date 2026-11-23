-- Run this once in Supabase: SQL Editor > New query > paste > Run.

create table if not exists public.categories (
  id text primary key,
  name text not null,
  sub text,
  icon text,
  position int not null default 0
);

create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  category_id text not null references public.categories(id) on delete cascade on update cascade,
  name text not null,
  note text,
  description text,
  -- [{"label": "", "price": 75}] for one price, or [{"label":"Hot","price":65},{"label":"Ice","price":65}]
  prices jsonb not null default '[]'::jsonb,
  available boolean not null default true,
  position int not null default 0,
  updated_at timestamptz not null default now()
);

create index if not exists items_category_position_idx on public.items (category_id, position);

create or replace function public.touch_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists items_touch on public.items;
create trigger items_touch before update on public.items
  for each row execute function public.touch_updated_at();

-- Security: everyone can read the menu. A signed-in owner can change PRICES ONLY.
-- Row Level Security decides who can touch rows; column privileges decide which columns.
alter table public.categories enable row level security;
alter table public.items enable row level security;

drop policy if exists "menu is public: categories" on public.categories;
drop policy if exists "menu is public: items" on public.items;
drop policy if exists "owner edits: categories" on public.categories;
drop policy if exists "owner edits: items" on public.items;
drop policy if exists "owner edits prices" on public.items;

create policy "menu is public: categories" on public.categories for select using (true);
create policy "menu is public: items" on public.items for select using (true);
create policy "owner edits prices" on public.items for update to authenticated using (true) with check (true);

revoke all on public.categories, public.items from anon, authenticated;
grant select on public.categories, public.items to anon, authenticated;
grant update (prices) on public.items to authenticated;
