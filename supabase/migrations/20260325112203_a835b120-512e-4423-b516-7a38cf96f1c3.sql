
CREATE TABLE public.contact_rate_limit (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_ip text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_rate_limit ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_contact_rate_limit_ip_time ON public.contact_rate_limit (client_ip, created_at);
