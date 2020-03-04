export class JnlUserClass {
  constructor(
    public id: number,
    public emailAddress: string,
    public firstName: string,
    public lastName: string,
    public facebookUserID: string,
    public admin: boolean,
    public token: string | null,
    public fbAccessToken: string | null
  ){}
}
