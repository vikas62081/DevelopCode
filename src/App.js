import React from 'react';
import './App.css';
import PostFooter from './components/post/PostFooter';
import PostContent from './components/post/PostContent';
import PostHeader from './components/post/PostHeader';
function App() {
  return (
    <div className="App">
      <PostHeader/>
      <PostContent/>
    <PostFooter/>
    </div>
  );
}

export default App;
