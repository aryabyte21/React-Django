function UserInfo({ user }) {
  return (
    <div>
      <h1 style={{fontSize:"1.5rem"}}>{user.username} is logged in</h1>
    </div>
  );
}

export default UserInfo;
