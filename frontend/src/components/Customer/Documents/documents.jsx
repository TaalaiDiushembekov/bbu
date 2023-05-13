import React from "react";
import "./documents.css";
const Documents = ({ docs }) => {
    const documents = docs?.documents;
    return (
        <>
        <h2>Organization Documents</h2>
        <div className="link-container">
            {documents.map((doc) => (
                <div key={doc._id}>
                    <p className="link" >
                        <a href={doc.link}>
                            {doc.name}
                        </a>
                    </p>
                </div>
            ))}
        </div>
            </>
    );
};

export default Documents;
