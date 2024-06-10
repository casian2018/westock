import { useUser } from "../Providers/UserProvider";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  let user = useUser();

  return (
    <>
      {user.loading && (
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-50 bg-white">
          <div className="relative inline-flex">
            <div className=" w-10 h-10 bg-blue-500 rounded-full"></div>
            <div className="w-10 h-10 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-10 h-10 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      )}

      {children}
    </>
  );
}
