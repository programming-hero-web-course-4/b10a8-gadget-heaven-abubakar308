import toast from "react-hot-toast";

const getAllWishLists = () => {
    const allWishlists = localStorage.getItem('addedWishLists');
    if(allWishlists){
        const addedWishLists =JSON.parse(allWishlists)
        return addedWishLists
    }
    else{
        return []
    }
}

const addWishList = card =>{
    const addedWishLists = getAllWishLists();
    const isExist = addedWishLists.find(item=>item.product_id===card.product_id);
    if(isExist) return toast.error('Allready exist this!');
    addedWishLists.push(card);
    localStorage.setItem('addedWishLists', JSON.stringify(addedWishLists));
    toast.success('Successfully Added');
}

export { getAllWishLists, addWishList}