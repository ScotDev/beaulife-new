import { useNavigate, Link } from "react-router-dom";

export default function Button({
  children,
  // href,
  primary,
  secondary,
  type,
  disabled,
  onClick,
}) {
  const clickHandler = onClick ? onClick : null;
  // console.log("btn", href);

  // const LinkButton = (button) => {
  //   const navigate = useNavigate();
  //   const onLinkClick = () => {
  //     navigate("/" + href);
  //   };

  //   return (
  //     <Link>
  //       <div className="w-full" onClick={onLinkClick}>
  //         {button}
  //       </div>
  //     </Link>
  //   );
  // };
  const PrimaryButton = () => {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={clickHandler}
        className="btn-primary"
      >
        {children}
      </button>
    );
  };
  const SecondaryButton = () => {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={clickHandler}
        className="btn-secondary"
      >
        {children}
      </button>
    );
  };

  if (primary) {
    return <PrimaryButton />;
  } else if (secondary) {
    return <SecondaryButton />;
  } else {
    return <SecondaryButton />;
  }
}
