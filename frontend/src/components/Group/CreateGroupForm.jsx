
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