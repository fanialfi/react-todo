import { Outlet } from "react-router-dom";
import Brand from "../components/fragments/Brand";
import ImageProfile from "../components/fragments/ImageProfile";
import HeaderLayout from "../components/layouts/HeaderLayout";

export default function HeaderPage() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0">
        <HeaderLayout>
          <Brand />
          <ImageProfile />
        </HeaderLayout>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
