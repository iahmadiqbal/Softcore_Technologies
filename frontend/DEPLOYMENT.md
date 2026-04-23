# Deployment Instructions for Vercel

## Environment Variables Required

Add these environment variables in Vercel Dashboard:

1. Go to: **Project Settings** → **Environment Variables**
2. Add the following variables:

```
VITE_FIREBASE_API_KEY=AIzaSyCqXV8MFWkJsvXJKTC9uVexZgVjE5DTB-c
VITE_FIREBASE_AUTH_DOMAIN=softcore-technologies.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=softcore-technologies
VITE_FIREBASE_STORAGE_BUCKET=softcore-technologies.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=249801652933
VITE_FIREBASE_APP_ID=1:249801652933:web:f3ed022cc4be75616b8eac
```

3. Select environments: **Production**, **Preview**, and **Development**
4. Click **Save**
5. **Redeploy** the project

## Build Settings

- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## After Adding Environment Variables

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **Redeploy** button
4. Wait for the build to complete

The error should be resolved after adding environment variables and redeploying.
