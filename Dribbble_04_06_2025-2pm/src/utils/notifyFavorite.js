import { toast } from "react-toastify";

export function notifyFavorite(action, name) {
  const message =
    action === "add"
      ? `⭐ "${name}" agregado a favoritos.`
      : `☆ "${name}" eliminado de favoritos.`;
  toast(message);
}

