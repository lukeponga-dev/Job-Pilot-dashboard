
# JobTrack – Job Application Tracker

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
git clone https://github.com/your-username/job-track.git
cd job-track
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

The application is configured to connect to a Firebase project. The configuration is located in `src/firebase/config.ts`. You can replace the placeholder values with your own Firebase project configuration if you wish to use your own backend.

### 4. Initialize Firebase CLI

If you haven't already, log in to the Firebase CLI:

```bash
npx firebase login
```

## ✅ Run Locally

Start the Next.js development server:
```bash
npm run dev
```

The app will be running at `http://localhost:9002` and will connect to the configured Firebase project.

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

These rules ensure that users can only access their own data. The full rules are in `firestore.rules`.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isSignedIn() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return isSignedIn() && request.auth.uid == userId;
    }

    function isValidUserCreate(userId) {
      return request.resource.data.id == userId;
    }

    function isUserRecordImmutable() {
      return request.resource.data.id == resource.data.id;
    }
    
    function isValidSubcollectionCreate(userId) {
      return request.resource.data.userId == userId;
    }

    function isSubcollectionRecordImmutable() {
      return request.resource.data.userId == resource.data.userId;
    }

    match /users/{userId} {
      allow get: if isOwner(userId);
      allow list: if false;
      allow create: if isOwner(userId) && isValidUserCreate(userId);
      allow update: if isOwner(userId) && isUserRecordImmutable();
      allow delete: if false;

      match /jobApplications/{jobApplicationId} {
        allow read: if isOwner(userId);
        allow create: if isOwner(userId) && isValidSubcollectionCreate(userId);
        allow update: if isOwner(userId) && isSubcollectionRecordImmutable();
        allow delete: if isOwner(userId);
      }

      match /reminders/{reminderId} {
        allow read: if isOwner(userId);
        allow create: if isOwner(userId) && isValidSubcollectionCreate(userId);
        allow update: if isOwner(userId) && isSubcollectionRecordImmutable();
        allow delete: if isOwner(userId);
      }
    }
  }
}
```

## ✅ License, Terms, and Privacy

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

By using this application, you agree to our [Terms of Use](/terms) and [Privacy Policy](/privacy).
