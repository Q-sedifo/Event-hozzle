import { NavInfo } from "@/shared/ui/NavInfo";
import { Box } from "@/app/dashboard/ui/Box";
import { UserForm } from "./(userForm)";
import { PasswordForm } from "./(passwordForm)";

const Profile = () => {
  return (
    <div>
      <NavInfo title="My Profile" />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <Box title="Profile info">
            <UserForm />
          </Box>
        </div>
        <div className="flex-1">
          <Box title="Change Password">
            <PasswordForm />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profile;
