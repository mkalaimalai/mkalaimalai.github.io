# Deploying mkalaimalai.github.io to GitHub Pages

## Quick Steps (5 minutes)

### 1. Create the Repository
- Go to [github.com/new](https://github.com/new)
- Repository name: `mkalaimalai.github.io`
- Set to **Public**
- Click **Create repository**

### 2. Upload Your Files
- On the repo page, click **"uploading an existing file"** link
- Drag and drop the `index.html` file
- Write a commit message like "Initial site launch"
- Click **Commit changes**

### 3. Enable GitHub Pages
- Go to **Settings** → **Pages** (left sidebar)
- Under "Source", select **Deploy from a branch**
- Branch: **main**, Folder: **/ (root)**
- Click **Save**

### 4. Visit Your Site
- Wait 1-2 minutes for deployment
- Your site is live at: **https://mkalaimalai.github.io**

---

## Optional: Custom Domain

If you own a domain (e.g., `kalaimalai.dev`):

1. In repo Settings → Pages → Custom domain, enter your domain
2. Add these DNS records at your registrar:
   - **A records** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME** record: `www` → `mkalaimalai.github.io`
3. Check "Enforce HTTPS" once DNS propagates

## Before You Deploy

Update these placeholder links in `index.html`:
- `madhu@kalaimalai.dev` → your real email
- `github.com/madhukalaimalai` → your GitHub profile URL
- `linkedin.com/in/madhukalaimalai` → your LinkedIn URL
- `twitter.com/madhukalaimalai` → your X/Twitter URL
