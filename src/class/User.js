export class User {
  constructor(name = '', lastName = '', email = '', twitter = '', job = '', avatar = '') {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.twitter = twitter;
    this.job = job;
    this.avatar = avatar;
  }
}
