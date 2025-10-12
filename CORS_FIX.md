# 🔧 CORS Error Fix Guide

## ❌ Error You're Seeing:
"Request error while attempting to reach is https://2wmvbh5j.api.sanity.io..."

This happens when trying to upload images because Sanity needs to allow your localhost origin.

## ✅ Solution: Add CORS Origins

### Option 1: Via Sanity Dashboard (Recommended)

1. **Open**: https://sanity.io/manage/project/2wmvbh5j/settings/api
2. **Scroll to**: "CORS Origins" section
3. **Click**: "Add CORS origin"
4. **Add these origins:**

   **Origin 1:**
   - Origin: `http://localhost:3333`
   - ✅ Allow credentials
   - Click "Save"

   **Origin 2:**
   - Origin: `http://localhost:5175`
   - ✅ Allow credentials
   - Click "Save"

   **Origin 3:**
   - Origin: `http://localhost:5173`
   - ✅ Allow credentials
   - Click "Save"

5. **After saving, refresh Sanity Studio** (Ctrl + Shift + R)

### Option 2: Via Terminal (Automatic)

The CORS origins are being added automatically via the commands I ran. Wait a moment and then refresh your Sanity Studio.

## 🔄 After Adding CORS:

1. **Refresh Sanity Studio**: Press `Ctrl + Shift + R`
2. **Try uploading the icon again**
3. **It should work now!** ✅

## 📝 What This Does:

CORS (Cross-Origin Resource Sharing) allows your Sanity Studio running on localhost:3333 to communicate with the Sanity API. Without this, browsers block the requests for security reasons.

## ✅ Next Steps After Fix:

1. Refresh Sanity Studio
2. Continue creating your Technology (JavaScript)
3. Upload the `javascript.svg` icon
4. Publish the technology
5. Move on to the next technologies!

---

**The CORS origins are being added now. Refresh your Sanity Studio in about 30 seconds and try again!**
