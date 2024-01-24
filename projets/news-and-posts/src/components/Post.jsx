const Posts = ({ postId, title, body }) => {
    return (
        <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-left text-gray-900 capitalize">
                <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                    </svg>
                </div>
                {title}
            </dt>
            <dd className="mt-2 text-base leading-7 text-left text-gray-600">{body}</dd>
        </div>
    )
}

export default Posts