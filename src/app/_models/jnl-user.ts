export interface JnlUser {
  id: number;
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  facebookUserID: string;
  admin: boolean;
  token?: string;
  fbAccessToken?: string;
}
