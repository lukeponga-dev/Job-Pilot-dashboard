# Job Pilot – Job Application Tracker

A secure, responsive dashboard to track job applications with authentication, real-time updates, analytics, and reminders. Built with **Next.js**, **Firebase**, and **Tailwind CSS**.

## ✅ Features

*   **Authentication**: Email/Password + Google Sign-In (Firebase Auth)
*   **Job Tracking**: Add, update, and delete applications
*   **Real-Time Updates**: Firestore `onSnapshot` for instant changes
*   **Dashboard**:
    *   Summary cards (Total, Interviews, Offers)
    *   Filters (by status)
    *   Charts (applications by status)
*   **Reminders**: Create and manage interview reminders
*   **AI-Powered Insights**: Get personalized recommendations based on your application history.
*   **CSV Import/Export**: Bulk data management
*   **Dark Mode**: Light and dark theme support.
*   **Responsive UI**: Optimized for mobile and desktop
*   **Secure Firestore Rules**: Per-user data isolation

## ✅ Tech Stack

*   **Frontend**: Next.js (TypeScript), Tailwind CSS
*   **Backend**: Firebase (Auth, Firestore, App Hosting)
*   **State Management**: React Hooks + Context API
*   **Charts**: Recharts
*   **AI**: Google Gemini via Genkit
*   **Utilities**: date-fns, papaparse, lucide-react, shadcn/ui

## ✅ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/job-pilot.git
cd job-pilot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env.local` file in the root of your project with your Firebase project configuration:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
# Set to true to use local emulators, false for cloud Firebase
NEXT_PUBLIC_USE_EMULATORS=true
```

### 4. Initialize Firebase CLI

If you haven't already, log in to the Firebase CLI:

```bash
npx firebase login
```

## ✅ Run Locally

### With Firebase Emulators (Recommended)

1.  **Start Emulators**: This will start local emulators for Auth and Firestore.

    ```bash
    npx firebase emulators:start
    ```

2.  **Start Next.js**: In a new terminal, start the development server.

    ```bash
    npm run dev
    ```

The app will be running at `http://localhost:9002` and will connect to the local Firebase emulators.

### With Cloud Firebase

1.  Set `NEXT_PUBLIC_USE_EMULATORS=false` in your `.env.local` file.
2.  Start the Next.js development server:
    ```bash
    npm run dev
    ```

## ✅ Deploy

1.  **Build for Production**:
    ```bash
    npm run build
    ```

2.  **Deploy to Firebase**: This command will deploy your Next.js application to Firebase App Hosting.
    ```bash
    npx firebase deploy
    ```

## ✅ Firestore Rules

These rules ensure that users can only access their own data.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read, write, and update their own job applications
    match /jobApplications/{docId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    
    // Users can only manage their own reminders
    match /reminders/{docId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
  }
}
```
