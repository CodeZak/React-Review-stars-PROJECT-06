import React from "react";

function App() {
    const [contact, setContact] = React.useState({
        firstName: "Zakariae",
        lastName: "Mahi",
        phone: "+212601535299",
        email: "mahi.zakariae@gmail.com",
        isFavorite: false,
    });

    function flipStar() {
        setContact((prevContact) => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite,
        }));
    }
    return (
        <article className="card container">
            <img className="card--image" src="avatar.png" alt="" />
            <div className="card--info">
                <i
                    onClick={flipStar}
                    className={
                        contact.isFavorite
                            ? "fa-solid fa-star review--icon gold"
                            : "fa-regular fa-star review--icon"
                    }
                ></i>
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <h3 className="card--phone">{contact.phone}</h3>
                <h3 className="card--email">{contact.email}</h3>
            </div>
        </article>
    );
}

export default App;
