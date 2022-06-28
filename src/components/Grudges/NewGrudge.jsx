import React, {useState} from 'react';

const NewGrudge = React.memo(({onSubmit}) => {
    const [person, setPerson] = useState('')
    const [reason, setReason] = useState('')


    function handleSubmit(event) {
        event.preventDefault()
        onSubmit({person, reason})
        setReason('')
        setPerson('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Person"
                value={person}
                onChange={(event) => {
                    setPerson(event.target.value)
                }}
            />

            <input
                type="text"
                placeholder="Reason"
                value={reason}
                onChange={(event) => {
                    setReason(event.target.value)
                }}
            />
            <input type="submit" value="Add"/>
        </form>
    );
})

export default NewGrudge;