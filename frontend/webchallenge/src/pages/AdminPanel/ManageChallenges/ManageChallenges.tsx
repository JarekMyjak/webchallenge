import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { apiGet, apiPost } from '../../../api/apiMethods';
import colors from '../../../helpers/colors.helpers';
import {
    Container
} from './ManageChallenges.style'

const submit = (title: string, description: string, pictures: FileList, file: FileList) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    file.item
    for (let i = 0; i < file.length; i++) {
        formData.append("files", file.item(i) as Blob);
    }
    for (let i = 0; i < pictures.length; i++) {
        formData.append("images", pictures.item(i) as Blob); 
    }
    const res = apiPost("/api/challenges", formData)
    console.log(res)
}

const ManageChallenges: React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState<FileList | null>(null);
    const [pictures, setPictures] = useState<FileList | null>(null);
    
    return (
        <Container>
            Tutaj miejsce na wrzucanie paczek <br />

            <label htmlFor='challengeTitle'>title:</label>
            <input type="text" id='challengeTitle' value={title} onChange={((e) => setTitle(e.target.value))} /><br />
            <label htmlFor='challengeDescription'>description:</label>
            <input type="text" id='challengeDescription' value={description} onChange={((e) => setDescription(e.target.value))} /><br />
            {/* <span>{file?.item(0)?.name}</span><br/> */}
            <label htmlFor='challengeImages'>images:</label>
            <input type="file" id='challengeImages' multiple onChange={((e) => setPictures(e.target.files))} /><br />
            <label htmlFor='challengeFile'>challenge files:</label>
            <input type="file" id='challengeFile' onChange={((e) => setFile(e.target.files))} /><br />
            {/* <input type="text" value={title} onChange={((e) => setTitle(e.target.value))} /><br/> */}
            <button onClick={() => {
                submit(title, description, pictures, file)
            }}>submit</button>
            <br />
            <br />
            <br />
            <br />
            <br />

        </Container>
    );
}
export default ManageChallenges;