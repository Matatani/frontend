"use client"

import {useState} from "react";
import { apiBase } from '@/lib/constants';
import * as tus from "tus-js-client"

export default function FileUpload() {
    const [uploadProgress, setUploadProgress] = useState(0)
    const [uploadStatus, setUploadStatus] = useState('')
    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            setFile(files[0])
        }
    }
    const handleUpload = () => {
        if(!file) {
            alert('Please select a file')
            return;
        }

        const upload = new tus.Upload(file, {
            endpoint: `${apiBase}/upload/`,
            retryDelays: [0, 3000, 5000, 10000, 20000],
            metadata: {
                filename: file.name,
                filetype: file.type
            },
            onError: (error) => {
                console.log(error)
                setUploadStatus('Failed because: ' + error)
            },
            onProgress: (bytesUploaded, bytesTotal) => {
                const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
                setUploadProgress(parseFloat(percentage));
                setUploadStatus(`Uploaded ${percentage}%`);
            },
            onSuccess: () => {
                setUploadStatus("Upload complete 🎉");
                console.log("Download URL:", upload.url);
            }
        })
        upload.start()
    }
    
    return (
        <div>
            <h1>Please upload your sick leaf</h1>

            <input type="file" onChange={handleFileChange} required />
            <br /><br />

            <button onClick={handleUpload}>Upload</button>
            <br /><br />

            <progress value={uploadProgress} max="100" style={{ width: '300px' }}></progress>
            <p>{uploadStatus}</p>
        </div>
    )
}