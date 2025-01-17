

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
 return (
  <div className="h-full flex items-center justify-center bg-gradient-to-r from-yellow-800 to-yellow-400">
   {children}
  </div>
 );
};
export default AuthLayout;
