# Grand Via Luxe — Luxury Chauffeur Service Website

**Premium chauffeur service website for Grand Via Luxe, serving New York City and the Tri-State Area.**

---

## 🌐 Live Site

Once deployed: `https://YOUR-GITHUB-USERNAME.github.io/grandvialuxe/`

---

## 📁 Project Structure

```
grandvialuxe/
├── index.html          ← Main SPA file (all pages pre-loaded)
├── css/
│   └── style.css       ← Complete stylesheet
├── js/
│   └── main.js         ← SPA navigation + animations
└── README.md
```

---

## 🚀 Step-by-Step GitHub Pages Deployment

### STEP 1 — Create a GitHub Account (if you don't have one)
1. Go to **https://github.com**
2. Click **Sign Up**
3. Enter your email, create a password, pick a username
4. Verify your email

---

### STEP 2 — Create a New Repository
1. After logging in, click the **green "+ New"** button (top left)
2. Name it: `grandvialuxe`
3. Make sure it is set to **Public**
4. **Do NOT** check "Initialize with README" (we'll upload our files)
5. Click **"Create repository"**

---

### STEP 3 — Upload Your Website Files
1. On your new empty repository page, click **"uploading an existing file"** link (you'll see it in the center of the page)
2. **Drag and drop** all files and folders from the `grandvialuxe/` folder:
   - `index.html`
   - The entire `css/` folder
   - The entire `js/` folder
3. Scroll down, write a commit message like: `Initial website upload`
4. Click **"Commit changes"**

> ⚠️ **Important:** Make sure the folder structure is preserved. The `css/` and `js/` folders must remain as subfolders.

---

### STEP 4 — Enable GitHub Pages
1. In your repository, click the **"Settings"** tab (top navigation)
2. Scroll down to the **"Pages"** section in the left sidebar
3. Under **"Branch"**, select **`main`** from the dropdown
4. Make sure the folder is set to **`/ (root)`**
5. Click **Save**
6. GitHub will show: *"Your site is being published at https://YOUR-USERNAME.github.io/grandvialuxe/"*
7. **Wait 1-3 minutes**, then visit the URL!

---

### STEP 5 — Access Your Live Website
Your website will be available at:
```
https://YOUR-GITHUB-USERNAME.github.io/grandvialuxe/
```

---

## 🔧 Customization Guide

### 1. Update Your Phone Number
In `index.html`, search for `(212) 555-0100` and replace with your real number.
Also search for `tel:+12125550100` and replace with your real number.

### 2. Update Your Email
Search for `reservations@grandvialuxe.com` and replace with your real email.

### 3. Add Live Chat
This website has a **live chat button** built in. To connect it:

1. Sign up for a live chat service (recommended: **Tidio** — free plan available at tidio.com, or **LiveChat**, or **Intercom**)
2. Get your live chat widget URL or embed code
3. In `index.html`, search for `YOUR_LIVE_CHAT_URL_HERE` (appears twice — on Contact page and Book Now page)
4. Replace it with your live chat link, e.g.: `https://www.tidio.com/talk/YOUR-ID`
5. Remove the small note line that says `* Replace link with your live chat provider...`

**Popular live chat options:**
- **Tidio**: tidio.com (free plan, great for small businesses)
- **LiveChat**: livechat.com 
- **Intercom**: intercom.com
- **Tawk.to**: tawk.to (completely free)

### 4. Update Pricing
Search for price values (e.g., `$85`, `$110`) and update to your real rates.

### 5. Add Your Logo Image
Currently the logo is SVG text. To add an actual image logo:
Replace the `<svg>` logo blocks with: `<img src="images/logo.png" alt="Grand Via Luxe" width="160"/>`

---

## 📞 To Make Changes to the Website Later

### Option A — Direct Edit on GitHub (easiest):
1. Go to your repository
2. Click `index.html` (or any file)
3. Click the **pencil icon** (Edit)
4. Make your changes
5. Click **"Commit changes"**
6. Changes go live in ~1 minute

### Option B — Download, Edit, Re-upload:
1. Download the files, edit in any text editor (Notepad++, VSCode)
2. Re-upload the changed files to GitHub

---

## 🌟 Features Included

- ✅ **Single-page application** — all pages pre-loaded, instant navigation
- ✅ **Home page** with hero, services preview, fleet preview, testimonials, CTA
- ✅ **Services page** — 6 detailed service sections
- ✅ **Fleet page** — tabbed view of all 5 vehicles (Sedan, SUV, Sprinter, 28-Pass Bus, 55-Pass Party Bus)
- ✅ **Pricing page** — all vehicle rates, add-ons table
- ✅ **About page** — company story, values, stats
- ✅ **Contact page** — contact form, contact details, live chat link
- ✅ **Book Now page** — full booking/quote form with all required fields
- ✅ **Live chat button** — configurable link on Contact and Booking pages
- ✅ **Mobile responsive** — works on all devices
- ✅ **Gold particle animations**
- ✅ **Scroll progress bar**
- ✅ **Smooth page transitions**
- ✅ **Marquee ticker**
- ✅ **Testimonials auto-slider**

---

## 💬 Need Help?

Contact us at: reservations@grandvialuxe.com  
Phone: (212) 555-0100
