
        import './index.css'

        const UserProfile = (props) => {
        const { userDetails,serialNo } = props
        const { imageUrl, name, role } = userDetails

        return (
            <li className="user-card">
                <span className="serial-number">{serialNo}.</span>
            <img src={imageUrl} alt={name} className="avatar" />
            <p className="name">{name}</p>
            <p className="role">{role}</p>
            </li>
        )
        }

        export default UserProfile
