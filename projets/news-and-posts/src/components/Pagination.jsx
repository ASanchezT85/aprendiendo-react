const Pagination = ({ postsPerPage, length, handlePagination, currentPage }) => {
    let totalPages = 1;
    let paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumber.push(i);
        totalPages = i
    }
    
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{ currentPage }</span> to <span className="font-medium">{ totalPages }</span> of{' '}
                        <span className="font-medium">{ length }</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {
                            paginationNumber.map((data) => (
                                <button key={data} onClick={() => handlePagination(data)} className={currentPage === data ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}>
                                    {data}
                                </button>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Pagination