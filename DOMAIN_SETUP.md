# Domain Setup Guide - Pointing to Vercel

## Quick Steps

### Step 1: Add Domain in Vercel
1. Go to your Vercel project dashboard
2. Click on **Settings** → **Domains**
3. Enter your domain: `fastequipmentrentals.com`
4. Click **Add**
5. Vercel will show you DNS configuration options

### Step 2: Choose Configuration Method

#### Option A: Vercel Nameservers (Recommended - Easiest)
1. In Vercel, select "Use Vercel DNS"
2. Copy the nameservers (usually `ns1.vercel-dns.com` and `ns2.vercel-dns.com`)
3. In Hostinger:
   - Go to **Domains** → **Manage** → **DNS / Nameservers**
   - Change nameservers to Vercel's nameservers
   - Save changes

#### Option B: Custom DNS Records (Keep Hostinger DNS)
1. In Vercel, select "Configure DNS"
2. Vercel will provide DNS records to add:
   - **A Record**: `@` → Vercel IP address
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
3. In Hostinger:
   - Go to **Domains** → **Manage** → **DNS / Nameservers**
   - Add the A record for root domain
   - Add the CNAME record for www subdomain
   - Save changes

### Step 3: Verify
- DNS propagation can take 5 minutes to 48 hours (usually 1-2 hours)
- Vercel will automatically issue SSL certificate once DNS is configured
- Check status in Vercel dashboard under **Domains**

## Troubleshooting

- **DNS not updating?** Clear your DNS cache or wait longer
- **SSL not working?** Vercel automatically provisions SSL, wait 10-15 minutes after DNS is active
- **Need help?** Vercel has excellent documentation: https://vercel.com/docs/concepts/projects/domains

## Current Vercel Domain
Your site is currently available at:
- `fast-equipment-rentals-*.vercel.app` (check your Vercel dashboard for exact URL)

Once DNS is configured, it will also work at:
- `fastequipmentrentals.com`
- `www.fastequipmentrentals.com`
