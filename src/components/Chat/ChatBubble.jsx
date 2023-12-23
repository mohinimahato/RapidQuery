import PropTypes from 'prop-types';
import UpvotesBtn from "./UpvotesBtn";

function ChatBubble({ question, sender, handleUpvote }) {
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
                        className="min-w-[90%] relative ms-3 text-sm bg-indigo-900 text-white py-2 px-4 shadow rounded-xl"
                    >
                        <div className="">
                            {question}
                        </div>
                        <div>
                            <UpvotesBtn handleUpvote={handleUpvote} />
                            {/* <DismissBtn /> */}
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
    handleUpvote: PropTypes.func.isRequired,
};

export default ChatBubble;
