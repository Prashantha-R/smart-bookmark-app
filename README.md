Smart Bookmark App

This project is a simple bookmark manager built using Next.js, Supabase, Google OAuth authentication and Tailwind CSS. Users can log in using Google, add bookmarks, delete bookmarks and manage their own private bookmark list securely. The project demonstrates authentication, database integration, real time updates and deployment using modern web technologies.

Live Project Link
https://smart-bookmark-app-lyart-nu.vercel.app/

GitHub Repository
https://github.com/Prashantha-R/smart-bookmark-app

Features

Google login using Supabase authentication
Add bookmarks with title and URL
Delete bookmarks anytime
Private bookmarks for each user using Row Level Security
Real time bookmark updates without page refresh
Responsive UI using Tailwind CSS
Deployed on Vercel cloud platform

Tech Stack

Frontend Next.js React Tailwind CSS
Backend Supabase Authentication Database Realtime
Deployment Vercel

Setup Instructions

1 Clone repository
git clone https://github.com/Prashantha-R/smart-bookmark-app.git

cd smart-bookmark-app

2 Install dependencies
npm install

3 Create environment file .env.local and add
NEXT_PUBLIC_SUPABASE_URL=https://gmlywcbwlnhttviticco.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_Jmeqt-bJ8Gyz_FYparN_RA_XSzE4MLU

4 Run project locally
npm run dev

Problems Faced And Solutions

1.Google OAuth redirect issue
After login the app redirected back to login page.
Solution was adding correct Supabase callback URL in Supabase Authentication settings and Google Cloud Console.

2.Supabase Row Level Security configuration
Initially bookmarks were not saved or accessible correctly.
Enabled Row Level Security on bookmarks table and added policy auth.uid() = user_id so each user can access only their own data.

3.Tailwind CSS styling issue
Styles were not applied initially.
Imported Tailwind properly in globals.css using @import "tailwindcss" and restarted the development server.

4.Deployment TypeScript errors on Vercel
Build failed due to possible null user authentication error.
Added proper null checks before accessing user data and defined correct TypeScript state types.

5.Environment variables missing after deployment
Supabase connection failed in production.
Added NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel environment variables.

Conclusion

This project helped me learn authentication integration, secure database handling using Supabase, real time data updates, responsive UI development with Tailwind CSS, and deployment workflow using Vercel. It also improved debugging and problem solving skills during production deployment.

Author

Prashantha R
MCA Graduate
Full Stack Developer Fresher