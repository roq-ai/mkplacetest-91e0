interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Real Estate Agent'],
  customerRoles: ['Property Buyer'],
  tenantRoles: ['Property Seller', 'Real Estate Agent', 'Admin', 'Premium Advertiser'],
  tenantName: 'Organization',
  applicationName: 'mkplacetest',
  addOns: ['notifications', 'file'],
};
