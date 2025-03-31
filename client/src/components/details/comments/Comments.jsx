export default function Comments( {comments} ) {
    
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 max-w-sm">
                <div key={comments._id} className="w-full mb-4">
                    <p className="text-gray-700">{comments.comment}</p>
                    <p className="text-gray-500 text-sm">{comments.userName}</p>
                </div>
        </div>
    );
}