import toast from "react-hot-toast";

const getAllCards = () => {
    const allCards = localStorage.getItem('addedCards');
    if(allCards){
        const addedCards =JSON.parse(allCards)
        return addedCards
    }
    else{
        return []
    }
    
}

const addCard = card =>{
    const addedCards = getAllCards();
    const isExist = addedCards.find(item=>item.product_id===card.product_id);
    if(isExist) return toast.error('Allready exist this!');
    addedCards.push(card);
    localStorage.setItem('addedCards', JSON.stringify(addedCards));
    toast.success('Successfully Added');
}


export { addCard , getAllCards}