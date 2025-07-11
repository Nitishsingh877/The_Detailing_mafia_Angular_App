export class User {
  id: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  token: string = '';
  enabled: boolean = true;
  userRole: string = ''; // ✅ now a plain string
}