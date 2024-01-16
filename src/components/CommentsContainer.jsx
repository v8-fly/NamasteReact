import React from "react"

const commentsData = [
  {
    name: "Hardik",
    comment: "Comment level -1",
    replies: [
      {
        name: "Virat",
        comment: "Comment level -2",
        replies: [
          {
            name: "Hardik",
            comment: "Comment level -3",
            replies: [
              {
                name: "Hardik",
                comment: "Comment level -4",
                replies: [
                  {
                    name: "Hardik",
                    comment: "Comment level -3",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "AK",
    comment: "Contrary to popular belief, Lorem Ipsum is not simply r",
    replies: [
      {
        name: "Virat",
        comment:
          "It is a long established fact that a reader will be distracted",
        replies: [],
      },
    ],
  },
  {
    name: "Virat",
    comment: "It is a long established fact that a reader will be distracted",
    replies: [
      {
        name: "Virat",
        comment:
          "It is a long established fact that a reader will be distracted",
        replies: [],
      },
    ],
  },
  {
    name: "Anushka",
    comment: "here are many variations of passages of Lorem Ipsum available",
    replies: [
      {
        name: "Virat",
        comment:
          "It is a long established fact that a reader will be distracted",
        replies: [],
      },
    ],
  },
  {
    name: "MAthew",
    comment: "Lorem Ipsum is simply dummy text of the printing ",
    replies: [
      {
        name: "Virat",
        comment:
          "It is a long established fact that a reader will be distracted",
        replies: [],
      },
    ],
  },
  {
    name: "Dhoni",
    comment: "need to be sure there isn't anything embarrassing hidden in the",
    replies: [
      {
        name: "Virat",
        comment:
          "It is a long established fact that a reader will be distracted",
        replies: [],
      },
    ],
  },
]

const Comment = ({ data }) => {
  console.log("Comment", data)
  const { name, comment } = data
  return (
    <div className="flex gap-2 items-center bg-gray-300 shadow-lg rounded-sm m-2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  )
}

const CommentsList = ({ comments }) =>
  comments.map((comment, id) => {
    return (
      <div className="" key={id}>
        <Comment data={comment} />
        <div className="pl-7 border border-l-black ml-4">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    )
  })

function CommentsContainer() {
  return (
    <div className="mt-2 p-2">
      <h1 className="font-bold text-xl">Comments : </h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
