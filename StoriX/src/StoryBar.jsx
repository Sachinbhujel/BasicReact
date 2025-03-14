import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./App.css";
import AddStory from "./AddStory";

const storiesData = [
    {
        id: 1,
        name: "Alice",
        image: "https://images.pexels.com/photos/30415006/pexels-photo-30415006/free-photo-of-traditional-vietnamese-couple-in-ao-dai-in-h-i-an.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 2,
        name: "Bob",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 3,
        name: "Charlie",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 4,
        name: "David",
        image: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 5,
        name: "Eve",
        image: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 6,
        name: "Frank",
        image: "https://images.pexels.com/photos/1524105/pexels-photo-1524105.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 7,
        name: "Grace",
        image: "https://images.pexels.com/photos/4910956/pexels-photo-4910956.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 8,
        name: "Hannah",
        image: "https://images.pexels.com/photos/1122639/pexels-photo-1122639.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

const suggestionsData = [
    {
        id: 1,
        name: "Atul",
        image: "https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 2,
        name: "Parker",
        image: "https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 3,
        name: "Deepak",
        image: "https://images.pexels.com/photos/9248710/pexels-photo-9248710.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 4,
        name: "Rashmi",
        image: "https://images.pexels.com/photos/18316340/pexels-photo-18316340/free-photo-of-boy-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 5,
        name: "Varsha",
        image: "https://images.pexels.com/photos/9345674/pexels-photo-9345674.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 6,
        name: "Praksh",
        image: "https://images.pexels.com/photos/3781346/pexels-photo-3781346.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 7,
        name: "Yerat",
        image: "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 8,
        name: "Shivam",
        image: "https://images.pexels.com/photos/2858965/pexels-photo-2858965.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

function StoryBar({ uploadedImage }) {
    const [myStory, setMyStory] = useState(null);
    const [showAddStory, setShowAddStory] = useState(false);

    const handleStoryUpload = (imageUrl) => {
        setMyStory(imageUrl);
        setShowAddStory(false);
    };

    return (
        <>
            {showAddStory ? (
                <AddStory
                    onBack={() => setShowAddStory(false)}
                    onUpload={handleStoryUpload}
                />
            ) : (
                <>
                    <div className="following-div my-story-div">
                        <h2 className="following-heading">My Story</h2>
                    </div>
                    <div className="my-story-img-div">
                        {uploadedImage || myStory ? (
                            <>
                                {uploadedImage && (
                                    <img
                                        src={uploadedImage}
                                        alt="My Story"
                                        className="my-story-img"
                                    />
                                )}
                                {myStory && (
                                    <img
                                        src={myStory}
                                        alt="Previous Story"
                                        className="my-story-img"
                                    />
                                )}
                            </>
                        ) : (
                            <FaUserCircle className="my-story-img" />
                        )}

                        <div
                            className="add-story"
                            onClick={() => setShowAddStory(true)}
                        >
                            <p>+</p>
                        </div>
                    </div>
                    <div className="another-home-div">
                        <div className="following-div">
                            <h2 className="following-heading">Following</h2>
                            <p>View all</p>
                        </div>
                        <div className="stories-container">
                            {storiesData.map((story) => (
                                <div key={story.id} className="story">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="story-img"
                                    />
                                    <p className="story-name">{story.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="another-home-div">
                        <div className="following-div">
                            <h2 className="following-heading">Suggestion</h2>
                            <p>View all</p>
                        </div>
                        <div className="stories-container">
                            {suggestionsData.map((story) => (
                                <div key={story.id} className="story">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="story-img"
                                    />
                                    <p className="story-name">{story.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default StoryBar;
