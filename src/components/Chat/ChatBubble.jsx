
import PropTypes from 'prop-types';
import UpvotesBtn from "./UpvotesBtn";
import DismissBtn from "./DismissBtn";

function ChatBubble({ question, sender, handleUpvote, handleDismiss, priority }) {
    return (
        <div>
            <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row">
                    <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-300 flex-shrink-0 font-medium  "
                    >
                        {sender}
                    </div>
                    <div
                        className="w-100 min-w-[90%] max-w-96   text-wrap ms-3 text-sm bg-indigo-900 text-white py-4 px-4 shadow rounded-xl "
                    >
                        <div className="w-100 break-normal text-wrap ">
                            {question}
                        </div>
                        <div className=" mt-3">
                            {priority === 'normal' && <UpvotesBtn handleUpvote={handleUpvote} />}
                            {priority !== 'normal' && <DismissBtn handleDismiss={handleDismiss} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ChatBubble.propTypes = {
    question: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    handleUpvote: PropTypes.func.isRequired,
    handleDismiss: PropTypes.func.isRequired,
    priority: PropTypes.string.isRequired,
};

export default ChatBubble;
