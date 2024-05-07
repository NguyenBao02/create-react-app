import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = (props) => {
    return (
        <>
            <Sidebar>
                <Menu>
                    <MenuItem>DashBoard</MenuItem>
                    <SubMenu label="Features">
                        <MenuItem>Quản lý User</MenuItem>
                        <MenuItem>Quản lý Bài Quiz</MenuItem>
                        <MenuItem>Quản lý Câu Hỏi</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </>
    );
}

export default SideBar;