import React, { useEffect, useState } from 'react'
import './styles.scss'


const Info = () => {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
  return (
    <div className="img-preview">
        <h1 className="img-header">Choose profile image</h1>
        <input type="file" onChange={handlePreviewAvatar}/>
        {avatar && (
            <img className="img" src={avatar.preview} alt="" />
        )}
    </div>
  )
}

export default Info