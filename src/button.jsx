import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ButtonAction({ action, iconName, onClick, iconPlacement }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 flex gap-2 items-center bg-answerbgcolor font-bold rounded-xl hover:bg-answerbgcolorhover"
    >
      {iconPlacement === "left" && iconName && (
        <FontAwesomeIcon icon={iconName} />
      )}
      {action}
      {iconPlacement === "right" && iconName && (
        <FontAwesomeIcon icon={iconName} />
      )}
    </button>
  );
}

export default ButtonAction;
