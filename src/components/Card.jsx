function Card({title="Default", imageUrl="https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg"}){
    return (
            <div>
            <img src={imageUrl} alt="image"/>
            <button>{title}</button>
            </div>
    );
}

export default Card;