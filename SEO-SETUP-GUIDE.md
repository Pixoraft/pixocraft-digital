# SEO Setup Guide for Pixocraft Digital

This guide provides instructions for completing the SEO setup for the Pixocraft Digital website.

## Google Analytics Setup

### Step 1: Create Google Analytics Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" in the bottom left corner
4. Click "Create Property"
5. Fill in property details:
   - Property name: Pixocraft Digital
   - Timezone: India
   - Currency: Indian Rupee (₹)
6. Click "Next" and complete setup
7. Choose "Web" as the platform
8. Enter website URL: https://pixocraft.in
9. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### Step 2: Add Measurement ID to Environment
1. Create a `.env` file in the root directory (if not exists)
2. Add the following line:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID
3. Restart the application for changes to take effect

## Google Search Console Setup

### Step 1: Verify Website Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" option
4. Enter: https://pixocraft.in
5. Choose verification method: **HTML tag** (recommended)
6. Copy the meta tag provided
7. Add the meta tag to `client/index.html` in the `<head>` section:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
8. Click "Verify" in Search Console

### Step 2: Submit Sitemap
1. Once verified, go to "Sitemaps" in the left menu
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Your sitemap will be processed within 24-48 hours

## Meta Tags Already Implemented

The following SEO optimizations are already implemented on all pages:

### ✅ Meta Tags
- Title tags (unique for each page)
- Meta descriptions (keyword-rich)
- Meta keywords
- Canonical URLs
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Robots meta tags

### ✅ Structured Data (JSON-LD)
- Organization schema
- LocalBusiness schema
- WebSite schema
- Service schemas (Pricing page)
- FAQ schema (Contact page)
- BlogPosting schema (Blog posts)
- Breadcrumb schema (Blog pages)

### ✅ Technical SEO
- ✅ Sitemap.xml generated
- ✅ Robots.txt configured
- ✅ Canonical URLs on all pages
- ✅ Image lazy loading
- ✅ SEO-optimized alt text for all images
- ✅ Mobile-responsive design
- ✅ Fast page load times

### ✅ On-Page SEO
- Proper H1-H6 hierarchy
- Keyword-optimized content
- Internal linking structure
- External links to authoritative sources
- SEO-friendly URLs

## Keywords Targeted

### Primary Keywords
- Digital marketing agency Jalandhar
- Social media management Jalandhar
- Video editing services Jalandhar
- YouTube marketing Jalandhar
- Web development Jalandhar
- Local SEO Jalandhar

### Secondary Keywords
- Instagram marketing Punjab
- Facebook marketing Jalandhar
- Digital marketing services Punjab
- Social media agency Jalandhar
- Video editing prices Punjab
- Affordable marketing packages

### Long-tail Keywords
- Best digital marketing agency in Jalandhar
- Affordable social media management Jalandhar
- Professional video editing services Punjab
- YouTube SEO and marketing Jalandhar
- Local business SEO services Jalandhar

## Monitoring & Analytics

### Google Analytics Metrics to Track
1. **Traffic Metrics**
   - Total visitors
   - Page views
   - Bounce rate
   - Average session duration

2. **User Behavior**
   - Top pages visited
   - User flow
   - Conversion paths
   - Goal completions (contact form submissions)

3. **Acquisition**
   - Traffic sources (Organic, Direct, Referral, Social)
   - Top keywords driving traffic
   - Geographic location of users

### Google Search Console Metrics to Track
1. **Performance**
   - Total clicks
   - Total impressions
   - Average CTR (Click-through rate)
   - Average position for keywords

2. **Coverage**
   - Indexed pages
   - Pages with errors
   - Valid pages

3. **Enhancements**
   - Mobile usability
   - Core Web Vitals
   - Rich results (structured data)

## Next Steps for Ongoing SEO

1. **Content Strategy**
   - Publish new blog posts weekly
   - Update existing content quarterly
   - Add case studies and success stories

2. **Link Building**
   - Get listed in local business directories
   - Partner with complementary businesses
   - Guest post on relevant blogs

3. **Local SEO**
   - Optimize Google My Business profile
   - Encourage customer reviews
   - Build local citations

4. **Technical Maintenance**
   - Monitor Core Web Vitals
   - Fix broken links regularly
   - Update sitemap with new pages
   - Monitor and fix crawl errors

## Support

For any questions or issues with SEO setup, refer to:
- [Google Analytics Help](https://support.google.com/analytics)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Google's SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
