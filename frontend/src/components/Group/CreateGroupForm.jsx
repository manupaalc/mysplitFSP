
import Autosuggest from 'react-autosuggest';
import { createGroup } from '../../store/groupsReducer';
import './CreateGroupForm'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"

const CreateGroupForm = () => {
    const currentUser = useSelector(state => state.session.currentUser)
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [kind, setKind] = useState('Home')
    const [photo, setPhoto] = useState(null)

    const [username1, setUsername1] = useState('')
    // const [username2, setUsername2] = useState('')
    // const [username3, setUsername3] = useState('')
    // const [username4, setUsername4] = useState('')
    // const [username5, setUsername5] = useState('')
    // const [username6, setUsername6] = useState('')
    // const [username7, setUsername7] = useState('')
    // const [username8, setUsername8] = useState('')

    const [email1, setEmail1] = useState('')
    // const [email2, setEmail2] = useState('')
    // const [email3, setEmail3] = useState('')
    // const [email4, setEmail4] = useState('')
    // const [email5, setEmail5] = useState('')
    // const [email6, setEmail6] = useState('')
    // const [email7, setEmail7] = useState('')
    // const [email8, setEmail8] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        //const group ={ name, type, photo: photoFile}
        const groupData = new FormData()
        groupData.append('group[name]', name)
        groupData.append('group[kind]', kind)
        if(photo) {
            groupData.append('group[photo]', photo)
        }
        dispatch(createGroup(groupData))
        setName('')
        setKind('Home')
    }
    const handleFile = (e) => {
        const file = e.currentTarget.files[0]
        setPhoto(file)
    }

    const friends = useSelector(state => state.entities.friends);
    const [suggestedFriends, setSuggestedFriends] = useState([])
    

    const handleUsernameInput = (e) => {
        const input = e.target.value.toLowerCase();
        const filteredFriends = Object.values(friends).filter(
            friend =>
                friend.username.toLowerCase().includes(input) ||
                friend.email.toLowerCase().includes(input)
        );
        setSuggestedFriends(filteredFriends);
    };

    const handleFriendSelection = (suggestion) => {
        setUsername1(suggestion.username);
        setEmail1(suggestion.email);
    }

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : suggestedFriends.filter(friend =>
            friend.username.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
   

    return (     
        <form onSubmit={handleSubmit}>
        <h2>START A NEW GROUP</h2>
            <label>My group shall be called...
                <input 
                    type='text'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
            />
            </label>
            <input type='file' onChange={handleFile} />
            <h2>GROUP OF MEMBERS</h2>
            <p>{currentUser['user'].username}</p>
            <div className='add-users'>
                <div id='add-user-1'>
                    <Autosuggest
                        suggestions={getSuggestions(username1)}
                        onSuggestionsFetchRequested={({ value }) => handleUsernameInput({ target: { value } })}
                        onSuggestionsClearRequested={() => setSuggestedFriends([])}
                        getSuggestionValue={suggestion => suggestion.username}
                        renderSuggestion={suggestion => suggestion.username}
                        inputProps={{
                            placeholder: 'Search friends...',
                            value: username1,
                            onChange: (e, { newValue }) => setUsername1(newValue),
                        }}
                        onSuggestionSelected={(e, { suggestion }) => handleFriendSelection(suggestion)}
                    />
                    <input type="text" value={email1} onChange={(e)=> setEmail1(e.target.value)} />
                </div>
            </div>
            <h2> GROUP TYPE</h2>
            <label >
                <select value={kind} onChange={(e)=> setKind(e.target.value)}>
                    <option value="Home">Home</option>
                    <option value="Trip">Trip</option>
                    <option value="Couple">Couple</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <button type='submit'>Save</button>
        </form>
    )
    
}

export default CreateGroupForm;