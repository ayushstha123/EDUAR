import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Post() {
  const { slug } = useParams();
  const postsData = useSelector((state => state.post.data || []))
  const [postData, setPostData] = useState({})

  useEffect(() => {
    console.log("slug", slug)
    const data = postsData.find((post) => post.slug === slug)
    console.log("data", data)
    setPostData(data);
  }, [])

  return (
    <main className="h-[78vh] flex flex-col lg:flex-row items-center justify-evenly">
      <model-viewer
        src={`http://localhost:5000/file/${postData.file}`}
        id="postModelViewer"
        camera-controls
        disable-pan
        shadow-intensity="1"
        auto-rotate
        ar
        ar-modes="scene-viewer webxr quick-look"
        tone-mapping="neutral"
        poster="poster.png"
        className="border"
      >
      </model-viewer>
      <section className="w-1/2">
        <h1 className="text-3xl font-bold" >Title: {postData.name}</h1>
        <p>Content: {postData.content}</p>
      </section>
      {/* Render other post details */}
    </main>
  );
}

