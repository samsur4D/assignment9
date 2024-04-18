import { updateProfile } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../Firebase/Firebase.init';

const Updatepro = () => {
	useEffect(() => {
        document.title = 'Update Profile Page';
        return () => {
          document.title = 'Title';
        };
      }, []);
	const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        const url = e.target.url.value 
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }
	return (
		<form className="contain mx-auto container mt-80 mb-96 px-2 lg:px-0" onSubmit={handleUpdateProfile}>
      <div className="max-w-[900px] mt-10">
      <label htmlFor="name" className="block text-3xl font-semibold">Update Name</label>
				<input type="text" name="name" id="name" placeholder="Your Name" className="w-full h-[100px] px-3 py-2 border rounded-md" />
      </div>
      <div className="max-w-[900px] mt-32">
      <label htmlFor="url" className="block text-3xl font-semibold">Update Photo</label>
				<input type="url" name="url" id="url" placeholder="Your URL" className="w-full h-[100px] px-3 py-2 border rounded-md" />
      </div>
      <button type="submit" className="bg-blue-700 border-2 px-5 py-2 mt-5 text-white rounded-md text-3xl font-semibold">Update Profile</button>
    </form>
	);
};

export default Updatepro;