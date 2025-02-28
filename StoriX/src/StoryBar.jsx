import React from 'react';
import './App.css';

const storiesData = [
    { id: 1, name: "Alice", image: "https://images.pexels.com/photos/30415006/pexels-photo-30415006/free-photo-of-traditional-vietnamese-couple-in-ao-dai-in-h-i-an.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 2, name: "Bob", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 3, name: "Charlie", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 4, name: "David", image: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 5, name: "Eve", image: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 6, name: "Frank", image: "https://images.pexels.com/photos/1524105/pexels-photo-1524105.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 7, name: "Grace", image: "https://images.pexels.com/photos/4910956/pexels-photo-4910956.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 8, name: "Hannah", image: "https://images.pexels.com/photos/1122639/pexels-photo-1122639.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

function StoryBar() {
    return (
      <>
        <div className="following-div">
          <h2 className="following-heading">Following</h2>
          <p>View all</p>
        </div>
        <div className="stories-container">
          {storiesData.map((story) => (
            <div key={story.id} className="story">
              <img src={story.image} alt={story.name} className="story-img" />
              <p className="story-name">{story.name}</p>
            </div>
          ))}
        </div>
      </>
    );
}

export default StoryBar;