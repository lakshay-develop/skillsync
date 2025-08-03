function ProfileCard({user}){
    return (
        <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
            <h2>{user.name || 'Your Name'}</h2>
            <p><strong>Email:</strong>{user.email || 'youremail@gmail.com'}</p>
            <p><strong>City:</strong>{user.city || 'Your city name'}</p>
            <p><strong>Bio:</strong>{user.bio || 'Tell us briefly about yourself'}</p>
        </div>
    )
}

export default ProfileCard