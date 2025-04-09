export default function Comments({ comments }) {
    console.log(comments);  // Check if userName exists
    return (
      <div className="flex flex-col items-start bg-white rounded-lg shadow p-4 w-full mb-4">
        <p className="text-purple-700 font-semibold">{comments.username}</p>
        <p className="text-gray-700 mt-1">{comments.comment}</p>
      </div>
    );
  }
  