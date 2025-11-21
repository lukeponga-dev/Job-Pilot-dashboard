# Security Policy

The JobTrack team is committed to ensuring the security and privacy of our users. We take all security vulnerabilities seriously and appreciate the community's efforts in helping us create a safer platform.

## Data and Privacy Model

Our core security philosophy is built on a strict user-ownership model. All user-generated data, including job applications and reminders, is stored in a secure, isolated "silo" under a specific user's document in our Firebase database. This creates a secure environment where users can only ever access their own information.

This principle is enforced by our [Firestore Security Rules](firestore.rules), which are designed to prevent any user from accessing another user's data. Key aspects of our security model include:

- **Strict Ownership:** All access checks verify that the authenticated user's ID matches the `userId` in the document path.
- **User Enumeration Disabled:** Listing the top-level `/users` collection is explicitly forbidden to protect user privacy.
- **Secure Subcollections:** All sensitive data is stored in subcollections under the user's primary document, inheriting the same ownership-based access control.

## Reporting a Vulnerability

We encourage responsible disclosure of security vulnerabilities. If you believe you have found a security vulnerability in JobTrack, please report it to us as soon as possible.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please send an email to **security@jobtrack.com** with the following information:

- **Description:** A detailed description of the vulnerability, including the potential impact.
- **Reproduction Steps:** Clear steps to reproduce the vulnerability, including any URLs or code snippets.
- **Environment:** Information about the environment you used to find the vulnerability (e.g., browser, operating system).
- **Your Contact Information:** Your name and a way to contact you.

## Our Commitment

When you report a vulnerability, we commit to the following:

- We will acknowledge receipt of your report within 48 hours.
- We will provide you with an estimated timeline for addressing the vulnerability.
- We will keep you informed of our progress.
- We will work with you to understand and resolve the issue quickly.
- We will publicly credit you for your discovery (if you wish) once the vulnerability has been resolved.

We value the work of security researchers and appreciate your help in keeping JobTrack secure.