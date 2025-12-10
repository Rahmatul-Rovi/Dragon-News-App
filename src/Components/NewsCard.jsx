import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        image_url,
        author,
        details,
        rating,
        total_view
    } = news;

    const formattedDate = new Date(news.author.published_date).toLocaleDateString();

    return (
        <div className="card bg-base-100 shadow-md mb-6  rounded-lg">
            
            {/* Header: Author + Share */}
            <div className="flex justify-between items-center p-4  bg-base-200">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={author?.img} alt="Author" />
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold text-sm">{author?.name}</h2>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                <button className="text-gray-500 hover:text-primary flex gap-1">
                    <FaRegBookmark size={18} />
                    <FaShareAlt size={18} />
                </button>
            </div>

            {/* Title */}
            <div className="px-4 py-3">
                <h2 className="font-bold text-lg">{title}</h2>
            </div>

            {/* Image */}
            <figure>
                <img src={image_url} alt="News" className="w-full max-h-[350px] object-cover" />
            </figure>

            {/* Details */}
            <div className="px-4 py-3 text-sm text-gray-700">
                {details?.length > 200 ? ( <> {details.slice(0, 200)}... 
                <span className="text-primary font-semibold cursor-pointer hover:underline">Read more</span>
                </>
                 ) : (
                    details
                 )}
            </div>

            {/* Footer: Rating + Views */}
            <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-600">
               <div className="flex items-center gap-1 text-yellow-500">
    {[...Array(Math.round(rating?.number || 0))].map((_, i) => (
        <FaStar key={i} />
    ))}
</div>


                <div className="flex items-center gap-1">
                    <FaEye /> {total_view}
                </div>
            </div>

        </div>
    );
};

export default NewsCard;
