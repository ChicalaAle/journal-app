import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
            className="journal__entry-picture" 
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)'
            }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal_entry-title">Un nuevo día</p>
                <p className="journal_entry-content"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. </p>
            </div>

            
            <div className="journal_entry-content">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
