import { useDispatch } from 'react-redux';
import './CreateGroupForm'
import { useState } from 'react';

const CreateGroupForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [photoFile, setPhotoFile] = useState(null)
    const handleSubmit = () =>{
        e.preventDefault();
        //const group ={ name, type, photo: photoFile}
        const groupData = new FormData()
        groupData.append('group[name]', name)
        groupData.append('group[type]', type)
        if(photoFile) {
            groupData.append('group[photo]', photoFile)
        }
        // missing creatGroup function here (dispatch createGroup(groupData))
    }
    const handlePhoto = (e) => {
        const photo = e.currentTarget.files[0]
        setPhotoFile(photo)
    }

    return (     
        <form onSubmit={handleSubmit}>
        <h2>START A NEW GROUP</h2>
            <label>My group shall be called...
                <input 
                    type='text'
                    value={name}
                    onChange={(e)=> dispatch(setName(e.target.value))}
            />
            </label>
            <input type='file' onChange={handlePhoto} />
        </form>
    )
    
}

export default CreateGroupForm;