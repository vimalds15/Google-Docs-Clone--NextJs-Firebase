import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from 'next-auth/client'

function Header() {
  const [session] = useSession();

  console.log("session",session)
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="grey"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>

      <div
        className="
            flex flex-grow items-center md:mx-20 mx-5 px-5 py-2 
             text-gray-600 bg-gray-100
             rounded-lg focus-within:text-gray-600 focus-within:shadow-md">

        <Icon name="search" size="3xl" color="gray" />

        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
      <Icon name="apps" size="3xl" color="gray" />

      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src={session?.user?.image}
        alt="user"
        onClick={signOut}
      />

    </header>
  );
}

export default Header;
