import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FeedbackForm from "./GetFeedback"; // Make sure you have this component created as described before.

const FeedbackCollection = () => {
    const [mediaList, setMediaList] = useState([]);
    const [selectedMedia, setSelectedMedia] = useState(null);
     const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchMediaList = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/get-all-images/');
                if (!response.ok) {
                    throw new Error('Failed to fetch media list');
                }
                const data = await response.json();
                setMediaList(data);
            } catch (error) {
                setError('Error fetching media list');
                console.error('Error fetching media list:', error);
            }
        };
        fetchMediaList();
    }, []);

    const getMediaType = (mediaUrl) => {
        const extension = mediaUrl.split('.').pop().toLowerCase();
        return extension === 'mp4' ? 'video' : 'image';
      };

      
    const handleMediaClick = (mediaId) => {
        setSelectedMedia(mediaId);
    };

   

    const openModal = (mediaId) => {
        setSelectedMedia(mediaId);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const filteredMediaList = mediaList.filter(media =>
        media.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen py-10 px-4 bg-white text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Feedback Collection</h1>
            <input
                type="text"
                placeholder="Search by Ad Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
            />

            {error && <div className="text-red-500">{error}</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredMediaList.map((media) => (
                    <div key={media.id} className="rounded-lg overflow-hidden shadow-lg bg-white">
                        {getMediaType(media.image_url) === 'image' ? (
                            <img
                                src={`http://localhost:8000/uploads${media.image_url}`}
                                alt={media.name}
                                className="w-full h-60 object-cover"
                                onClick={() => handleMediaClick(media.id)}
                            />
                        ) : (
                            <video
                                src={`http://localhost:8000/uploads${media.image_url}`}
                                alt={media.name}
                                className="w-full h-60 object-cover"
                                controls
                                onClick={() => handleMediaClick(media.id)}
                            />
                        )}
                        <div className="p-4">
                            <p className="text-lg font-semibold mb-2">{media.name}</p>
                            <p className="text-sm text-gray-600">{media.location}</p>
                            <button
                                className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md"
                                onClick={() => openModal(media.id)}
                            >
                                View Feedback
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <FeedbackForm adId={selectedMedia} closeForm={closeModal} />
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export default FeedbackCollection;
