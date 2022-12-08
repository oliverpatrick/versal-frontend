/* eslint-disable react/react-in-jsx-scope */
import CreatePost from './components/CreatePostSection/CreatePostSection';
import FilterPostSection from './components/FilterPostSection/FilterPostSection';
import Layout from './components/Layout';
import Post from './components/Post/Post';

function App() {
  return (
    <div className='App'>
      <Layout>
        <CreatePost />
        <FilterPostSection />
        <Post />
      </Layout>
    </div>
  );
}

export default App;
