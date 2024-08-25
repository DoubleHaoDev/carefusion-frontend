import SideBarButton, {
  SideBarButtonType,
} from "@/components/users/SideBarButton";

const UserSideBar = () => {
  return (
    <div className="w-[300px] p-4 flex flex-col bg-gray-800">
      <div className="w-full m-1 justify-start">Welcome </div>
      <div>
        <SideBarButton sideBarBtnType={SideBarButtonType.APPOINTMENTS} />
      </div>
      <div className="grow">
        <SideBarButton sideBarBtnType={SideBarButtonType.BOOK_APPOINTMENT} />
      </div>
      <div>
        <SideBarButton sideBarBtnType={SideBarButtonType.LOGOUT} />
      </div>
    </div>
  );
};

export default UserSideBar;
