import React from 'react';

const BlockedUserPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm">
                <div className="flex flex-col items-center">
                    <div className="bg-red-200 p-2 rounded-full">
                        <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mt-6">Access Denied</h1>
                    <p className="text-gray-600 text-center mt-4">
                        Your account has been blocked due to violation of our terms of service.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BlockedUserPage;
