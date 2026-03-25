
CREATE POLICY "Service role full access" ON public.contact_rate_limit
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "No anon access" ON public.contact_rate_limit
  FOR ALL
  TO anon
  USING (false)
  WITH CHECK (false);
