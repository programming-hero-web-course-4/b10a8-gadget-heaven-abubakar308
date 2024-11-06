

const Wishlist = () => {
    return (
        <div>
            <h2>This is wishllist</h2>
            <div className="flex justify-between bg-gray-300 rounded-2xl p-10">
                         <div className="flex gap-6 items-center">
                            <img className="rounded-2xl h-12 w-12" src="" alt="Image" />
                           <div>
                           <h3 className='text-xl font-semibold'>Title</h3>
                           <p>Description</p>
                           <p><span className='text-xl font-semibold'>BiddingPrice</span> </p>
                           </div>
                        </div>
                        <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button> 
            </div>
        </div>
    );
};

export default Wishlist;