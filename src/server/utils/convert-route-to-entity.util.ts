const mapping: Record<string, string> = {
  advertisements: 'advertisement',
  organizations: 'organization',
  properties: 'property',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
