
import Autosuggest from 'react-autosuggest';
import { createGroup } from '../../store/groupsReducer';
import './CreateGroupForm.css'
import {useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const CreateGroupForm = () => {
    const history = useHistory();
    const currentUser = useSelector(state => state.session.currentUser)
    const dispatch = useDispatch();
    const [showHiding, setShowHiding] = useState(false)

    const [name, setName] = useState('')
    const [kind, setKind] = useState('Home')
    const [photo, setPhoto] = useState(null)

    const [username1, setUsername1] = useState('')
    const [username2, setUsername2] = useState('')
    const [username3, setUsername3] = useState('')
    const [username4, setUsername4] = useState('')


    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [email3, setEmail3] = useState('')
    const [email4, setEmail4] = useState('')

    const [userId1, setUserId1] = useState('')
    const [userId2, setUserId2] = useState('')
    const [userId3, setUserId3] = useState('')
    const [userId4, setUserId4] = useState('')


    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const groupData = new FormData()
        groupData.append('group[name]', name)
        groupData.append('group[kind]', kind)
        if(photo) {
            groupData.append('group[photo]', photo)
        }
        groupData.append('group[user_ids][]', parseInt(currentUser['user'].id) )
        if (userId1) {
            groupData.append('group[user_ids][]', parseInt(userId1)); 
        }
        if (userId2) {
            groupData.append('group[user_ids][]', (userId2)); 
        }
        if (userId3) {
            groupData.append('group[user_ids][]', (userId3));
        }
        if (userId4) {
            groupData.append('group[user_ids][]', (userId4));
        }
        const groupId = await dispatch(createGroup(groupData))
        if (groupId){
            history.push(`/groups/${groupId}`)
        }
        setName('')
        setKind('Home')

        setEmail1('')
        setEmail2('')
        setEmail3('')
        setEmail4('')

        setUsername1('')
        setUsername2('')
        setUsername3('')
        setUsername4('')

        setUserId1('')
        setUserId2('')
        setUserId3('')
        setUserId4('')

        setShowHiding(false)
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

    const handleFriendSelection1 = (suggestion) => {
        setUsername1(suggestion.username);
        setEmail1(suggestion.email);
        setUserId1(suggestion.userId);
    }

    const handleFriendSelection2 = (suggestion) => {
        setUsername2(suggestion.username);
        setEmail2(suggestion.email);
        setUserId2(suggestion.userId);
    }

    const handleFriendSelection3 = (suggestion) => {
        setUsername3(suggestion.username);
        setEmail3(suggestion.email);
        setUserId3(suggestion.userId);
    }

    const handleFriendSelection4 = (suggestion) => {
        setUsername4(suggestion.username);
        setEmail4(suggestion.email);
        setUserId4(suggestion.userId);
    }
    

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : suggestedFriends.filter(friend =>
            friend.username.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
   

    return(  
        <form className='form-container' onSubmit={handleSubmit}>
            
            <div className='left-half'>
                <img src="/logo.png" alt="logo" id='create-page-img' />
                <input type='file' onChange={handleFile} />
            </div>
            
            <div className='right-half'>
                <h2>START A NEW GROUP</h2>
                <label> <h3> My group shall be called...</h3>
                    <input 
                        type='text'
                        className='name-input'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        onFocus={()=>setShowHiding(true)}
                        required
                    />
                </label>
                {showHiding &&(
                    <div className='hiding-inputs'>
                        <h2>GROUP MEMBERS</h2>
                        <p>{currentUser['user'].username}</p>
                        <div className='add-users'>
                            <div className='add-users-inputs' id='add-user-1'>
                                <Autosuggest
                                    suggestions={getSuggestions(username1)}
                                    onSuggestionsFetchRequested={({ value }) => handleUsernameInput({ target: { value } })}
                                    onSuggestionsClearRequested={() => setSuggestedFriends([])}
                                    getSuggestionValue={suggestion => suggestion.username}
                                    renderSuggestion={suggestion => suggestion.username}
                                    inputProps={{
                                        placeholder: 'Name',
                                        value: username1,
                                        className: 'username-inputs',
                                        onChange: (e, { newValue }) => setUsername1(newValue),
                                    }}
                                    onSuggestionSelected={(e, { suggestion }) => handleFriendSelection1(suggestion)}
                                />
                                <input type="text" className='email-input' value={email1} placeholder='email address' onChange={(e) => setEmail1(e.target.value)} />
                            </div>
                            <div className='add-users-inputs' id='add-user-2'>
                                <Autosuggest
                                    suggestions={getSuggestions(username2)}
                                    onSuggestionsFetchRequested={({ value }) => handleUsernameInput({ target: { value } })}
                                    onSuggestionsClearRequested={() => setSuggestedFriends([])}
                                    getSuggestionValue={suggestion => suggestion.username}
                                    renderSuggestion={suggestion => suggestion.username}
                                    inputProps={{
                                        placeholder: 'Name',
                                        value: username2,
                                        className: 'username-inputs',
                                        onChange: (e, { newValue }) => setUsername2(newValue),
                                    }}
                                    onSuggestionSelected={(e, { suggestion }) => handleFriendSelection2(suggestion)}
                                />
                                <input type="text" className='email-input' value={email2} placeholder='email address' onChange={(e) => setEmail2(e.target.value)} />
                            </div>
                            <div className='add-users-inputs' id='add-user-3'>
                                <Autosuggest
                                    suggestions={getSuggestions(username3)}
                                    onSuggestionsFetchRequested={({ value }) => handleUsernameInput({ target: { value } })}
                                    onSuggestionsClearRequested={() => setSuggestedFriends([])}
                                    getSuggestionValue={suggestion => suggestion.username}
                                    renderSuggestion={suggestion => suggestion.username}
                                    inputProps={{
                                        placeholder: 'Name',
                                        value: username3,
                                        className: 'username-inputs',
                                        onChange: (e, { newValue }) => setUsername3(newValue),
                                    }}
                                    onSuggestionSelected={(e, { suggestion }) => handleFriendSelection3(suggestion)}
                                />
                                <input type="text" className='email-input' value={email3} placeholder='email address' onChange={(e) => setEmail3(e.target.value)} />
                            </div>
                            <div className='add-users-inputs' id='add-user-4'>
                                <Autosuggest
                                    suggestions={getSuggestions(username4)}
                                    onSuggestionsFetchRequested={({ value }) => handleUsernameInput({ target: { value } })}
                                    onSuggestionsClearRequested={() => setSuggestedFriends([])}
                                    getSuggestionValue={suggestion => suggestion.username}
                                    renderSuggestion={suggestion => suggestion.username}
                                    inputProps={{
                                        placeholder: 'Name',
                                        value: username4,
                                        className: 'username-inputs',
                                        onChange: (e, { newValue }) => setUsername4(newValue),
                                    }}
                                    onSuggestionSelected={(e, { suggestion }) => handleFriendSelection4(suggestion)}
                                />
                                <input type="text" className='email-input' value={email4} placeholder='email address' onChange={(e) => setEmail4(e.target.value)} />
                            </div>
                        </div>
                        <h2> GROUP TYPE</h2>
                        <label >
                            <select id='kind-button' value={kind} onChange={(e) => setKind(e.target.value)}>
                                <option value="Home">Home</option>
                                <option value="Trip">Trip</option>
                                <option value="Couple">Couple</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                    </div>
                )}
                <button id='submit-button' type='submit'>Save</button>
            </div>
        </form>
    )
    
}

export default CreateGroupForm;