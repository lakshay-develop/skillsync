function ProfileCard({user}){
    return (
        <div className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 space-y-4">
            <h2 className="text-2xl font-semibold">{user.name || 'Your Name'}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Email:</strong>{user.email || 'youremail@gmail.com'}</p>
            <p className="text-sm"><strong>City:</strong>{user.city || 'Your city name'}</p>
            <p className="text-base mt-2"><strong>Bio:</strong>{user.bio || 'Tell us briefly about yourself'}</p>
        </div>
    )
}

export default ProfileCard