import SideBar from "./sidebar";
import "../../assets/scss/admin.scss"

const Admin = (props) => {
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar />
            </div>
            <div className="admin-content">
                This is admin content
            </div>
        </div>
    )
}

export default Admin;