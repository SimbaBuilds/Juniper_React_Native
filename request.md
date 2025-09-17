Schema:


create table public.wearables_data (
  id uuid not null default gen_random_uuid (),
  user_id uuid not null,
  integration_id uuid not null,
  metric_type public.metric_type_enum not null,
  metric_value jsonb not null,
  recorded_at timestamp with time zone not null,
  sync_date date not null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  constraint wearables_data_pkey primary key (id),
  constraint wearables_data_unique_record unique (user_id, integration_id, metric_type, recorded_at),
  constraint wearables_data_integration_id_fkey foreign KEY (integration_id) references integrations (id) on delete CASCADE,
  constraint wearables_data_user_id_fkey foreign KEY (user_id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

create index IF not exists idx_wearables_data_user_id on public.wearables_data using btree (user_id) TABLESPACE pg_default;

create index IF not exists idx_wearables_data_integration_id on public.wearables_data using btree (integration_id) TABLESPACE pg_default;

create index IF not exists idx_wearables_data_metric_type on public.wearables_data using btree (metric_type) TABLESPACE pg_default;

create index IF not exists idx_wearables_data_recorded_at on public.wearables_data using btree (recorded_at) TABLESPACE pg_default;

create index IF not exists idx_wearables_data_sync_date on public.wearables_data using btree (sync_date) TABLESPACE pg_default;

create index IF not exists idx_wearables_data_user_sync_date on public.wearables_data using btree (user_id, sync_date) TABLESPACE pg_default;

create index IF not exists idx_wearables_data_composite on public.wearables_data using btree (user_id, integration_id, metric_type, recorded_at) TABLESPACE pg_default;

create trigger update_wearables_data_updated_at BEFORE
update on wearables_data for EACH row
execute FUNCTION update_updated_at_column ();