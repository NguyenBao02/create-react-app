import { IoDiamond, IoMenu } from 'react-icons/io5';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const { collapsed } = props;
    return (
        <>
            <Sidebar collapsed={collapsed}>
                <Menu>
                    <MenuItem component={<Link to={"/admin"} />} icon={<IoMenu />}>DashBoard</MenuItem>
                    <SubMenu icon={<IoDiamond />} label="Features">
                        <MenuItem component={<Link to={"manager-user"} />}>Quản lý User</MenuItem>
                        <MenuItem>Quản lý Bài Quiz</MenuItem>
                        <MenuItem>Quản lý Câu Hỏi</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </>
    );
}

export default SideBar;