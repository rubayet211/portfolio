export const SCROLL_ROUTE_ORDER = ["/", "/about", "/skill", "/projects", "/contact"];

export function getRouteIndex(pathname) {
  return SCROLL_ROUTE_ORDER.indexOf(pathname);
}

export function getAdjacentRoute(pathname, direction) {
  const currentIndex = getRouteIndex(pathname);

  if (currentIndex === -1) {
    return null;
  }

  if (direction === "down") {
    return SCROLL_ROUTE_ORDER[currentIndex + 1] ?? null;
  }

  if (direction === "up") {
    return SCROLL_ROUTE_ORDER[currentIndex - 1] ?? null;
  }

  return null;
}

export function isAtScrollBoundary(direction, metrics, threshold = 24) {
  const { scrollTop, scrollHeight, clientHeight } = metrics;
  const distanceFromBottom = scrollHeight - clientHeight - scrollTop;

  if (direction === "down") {
    return distanceFromBottom <= threshold;
  }

  if (direction === "up") {
    return scrollTop <= threshold;
  }

  return false;
}

export function canEnableScrollNavigation({ canHover, reducedMotion }) {
  return Boolean(canHover && !reducedMotion);
}
