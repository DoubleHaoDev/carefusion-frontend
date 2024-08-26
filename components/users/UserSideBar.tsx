import SideBarButton, {
  SideBarButtonType,
} from "@/components/users/SideBarButton";

const UserSideBar = ({ userUuid }: { userUuid: string }) => {
  return (
    <div className="w-[300px] p-4 flex flex-col bg-gray-800">
      <div className="w-full m-1 justify-start">Welcome </div>
      <div>
        <SideBarButton
          sideBarBtnType={SideBarButtonType.APPOINTMENTS}
          userUuid={userUuid}
        />
      </div>
      <div className="grow">
        <SideBarButton
          sideBarBtnType={SideBarButtonType.BOOK_APPOINTMENT}
          userUuid={userUuid}
        />
      </div>
      <div>
        <SideBarButton
          sideBarBtnType={SideBarButtonType.LOGOUT}
          userUuid={userUuid}
        />
      </div>
    </div>
  );
};

export default UserSideBar;
