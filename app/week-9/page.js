"use client";
import Link from 'next/link';

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <div>
            <p className="mt-8 text-2xl flex justify-center">
                {user ? (
                    <button 
                        className="w-40 h-10 border border-blue-400 text-blue-400 rounded-md"  
                        onClick={firebaseSignOut}>Sign Out
                    </button>
                ) : (
                    <button 
                        className="w-60 h-10 border border-blue-400 text-blue-400 rounded-md"
                        onClick={gitHubSignIn}>Sign In with GitHub
                        </button>
                    )}
            </p>
            {user && (
            <p className="mt-8 text-center text-xl"> 
                Welcome {user.displayName},<br />
                Your email is {user.email}. <br />
                Here is your image ↓
                <img 
                    className="mx-auto" 
                    src={user.photoURL} 
                    alt={user.displayName}
                />
                <Link 
                    className="text-blue-700 underline" 
                    href="week-9/shopping-list">
                    Go to Shopping List
                </Link>
            </p>
            )}
        </div>
    );
}