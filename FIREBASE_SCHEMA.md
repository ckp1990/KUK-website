# Firebase Firestore Schema & Storage Organization

This document outlines the database schema (Firestore) and file organization (Cloud Storage) for the entire **Ullas Karanth Portfolio Website**.

The goal is to move all hardcoded data into a scalable, dynamic database that can be managed via a future CRM or Admin Panel.

---

## 1. Cloud Firestore Database Structure

Firestore is a NoSQL document database. We will organize data into **Collections** (like tables) and **Documents** (like rows).

### A. Collection: `pages`
*Stores static content for single pages like Home and About.*

#### Document: `home`
*   **hero_title** (string): "WildLife Science"
*   **hero_subtitle** (string): "Exploring the ecology of tigers..."
*   **hero_bg_image** (string, URL): "https://firebasestorage.../hero.jpg"
*   **about_snippet_title** (string): "About Dr. K. Ullas Karanth"
*   **about_snippet_text** (string, markdown): "Born in 1948..."
*   **about_snippet_image** (string, URL): "https://firebasestorage.../ullas-portrait.jpg"
*   **newsletter_title** (string): "Keep In Touch"
*   **newsletter_text** (string): "Stay updated with our news..."

#### Document: `about`
*   **full_bio** (string, markdown/rich-text): The complete biography content.
*   **profile_image** (string, URL): Main profile picture.
*   **awards** (array of objects):
    *   `[{ title: "Padma Shri", year: 2012 }, ...]`

---

### B. Collection: `testimonials`
*Stores individual testimonials for the Home Page carousel.*

#### Document: `{auto-generated-id}`
*   **name** (string): "Dr. George B. Schaller"
*   **role** (string): "Emeritus Scientist, WCS"
*   **quote** (string): "Ullas Karanth is a superb field biologist..."
*   **image_url** (string, URL): "https://firebasestorage.../schaller.jpg"
*   **order** (number): 1 (To control display order)
*   **is_active** (boolean): true

---

### C. Collection: `species`
*Stores the "Species of Interest" cards on the Home Page.*

#### Document: `{species_slug}` (e.g., `tiger`)
*   **name** (string): "Tiger"
*   **scientific_name** (string): "Panthera tigris"
*   **image_url** (string, URL): "https://firebasestorage.../tiger.jpg"
*   **description** (string): "Brief description..."
*   **order** (number): 1

---

### D. Collection: `institutions`
*Stores the logos/names for "Associated Institutions".*

#### Document: `{auto-generated-id}`
*   **name** (string): "Centre for Wildlife Studies"
*   **logo_url** (string, URL): (Optional) "https://firebasestorage.../cws-logo.png"
*   **website_url** (string, URL): "https://cwsindia.org"
*   **order** (number): 1

---

### E. Collection: `publications`
*Stores all publication entries. We use a `type` field to distinguish categories.*

#### Document: `{auto-generated-id}`
*   **title** (string): "Among Tigers: Fighting to Bring Back Asia’s Big Cats"
*   **type** (string): "book" | "scientific_article" | "popular_article"
*   **authors** (array of strings): `["K. Ullas Karanth"]`
*   **year** (number): 2006
*   **publication_date** (timestamp): 2006-01-01
*   **publisher** (string): "Chicago Review Press" (Books only)
*   **journal** (string): "Journal of Applied Ecology" (Scientific only)
*   **image_url** (string, URL): Cover image for books.
*   **link_url** (string, URL): Link to purchase or read PDF.
*   **language** (string): "English" | "Kannada" (mainly for books)
*   **tags** (array of strings): `["conservation", "tigers"]`

---

### F. Collection: `media_items`
*Stores items for the Media Gallery.*

#### Document: `{auto-generated-id}`
*   **title** (string): "Tiger Census 2024"
*   **type** (string): "photo" | "video" | "audio"
*   **media_url** (string, URL):
    *   For Photo: High-res image URL.
    *   For Audio: Link to podcast/MP3.
    *   For Video: YouTube/Vimeo link.
*   **thumbnail_url** (string, URL): Preview image for video/audio.
*   **description** (string): Caption or summary.
*   **date** (timestamp): When the media was created/published.

---

### G. Collection: `posts` (Commentary/Blog)
*Stores blog posts, replacing the current Markdown files.*

#### Document: `{slug}` (e.g., `future-of-tigers`)
*   **title** (string): "The Future of Tigers"
*   **slug** (string): "future-of-tigers" (Unique ID)
*   **content** (string, markdown/html): The full body of the post.
*   **excerpt** (string): Short summary for listings.
*   **cover_image** (string, URL): Hero image for the post.
*   **published_at** (timestamp): Publication date.
*   **author** (string): "K. Ullas Karanth"
*   **tags** (array of strings): `["policy", "india"]`
*   **is_published** (boolean): true

---

## 2. Firebase Cloud Storage Structure

Organizing files in buckets keeps assets manageable.

*   `/images/`
    *   `/home/` (Hero images, banners)
    *   `/profile/` (Headshots, bio photos)
    *   `/species/` (Tiger, Leopard, etc.)
    *   `/testimonials/` (Photos of people)
    *   `/media_gallery/` (General gallery photos)
    *   `/blog/` (Cover images for posts)
*   `/publications/`
    *   `/books/` (Book covers)
    *   `/pdfs/` (Uploaded PDFs of scientific papers if not hosted externally)
*   `/assets/`
    *   `/logos/` (Institution logos)
    *   `/icons/` (Custom UI icons)

---

## 3. Data Types Legend

*   **String:** Simple text (e.g., "Tiger").
*   **Number:** Integer or Float (e.g., 2024, 1.5).
*   **Boolean:** true/false.
*   **Timestamp:** Date and time object.
*   **Array:** List of items `['a', 'b']`.
*   **Map/Object:** Nested key-value pairs `{ x: 1, y: 2 }`.
*   **Reference:** Link to another document (advanced, usually not needed for simple portfolios).

---

## 4. Security Rules (Basic)

For a portfolio site managed by one admin (or a small team):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public Read Access: Anyone can read content
    match /{document=**} {
      allow read: if true;
    }

    // Admin Write Access: Only authenticated admins can edit
    // (Requires setting up Firebase Auth later)
    match /{document=**} {
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```
