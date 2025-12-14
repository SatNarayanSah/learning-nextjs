const indes = () => {
  const post = [
    {
      id: 1,
      title: 'This first blog',
      post: "this is post details of post 1"
    },
    {
      id: 2,
      title: 'This second blog',
      post: "this is post details of post 2"
    },
    {
      id: 3,
      title: 'This third blog',
      post: "this is post details of post 3"
    },
  ]
  return (
    <div>
      {post.map((post) => {
        return (
          <div key={post.id} className="flex items-center justify-around">
            <a href={`/pages/${post.id}`}> <h2 className="cursor-pointer"> {post.title} </h2></a>
            <p> {post.post} </p>
          </div>
        )
      })}

    </div>
  )
}

export default indes