## GraphQLChallenge

Ravn challenge. \
This project allows you to search github users and see their repositories. 

### Built with
* [Github Api for GraphQL](https://developer.github.com/v4/)
* [GraphQL](https://graphql.org/)
* [Apollo-Client](https://www.apollographql.com/docs/react/)
* [ReactJS](https://reactjs.org/)

### Clone project

* In the upper-right corner of this page, click the **Clone or download** button.
* Navigate to the folder you want to clone this project and run ```git clone https://github.com/GJDavila/challenge.git``` on the shell.
* or click **Download Zip** and then extract the zip file.


### Creating a token

1. Verify your email address.

- In the upper-right corner of any page, click your profile photo, then click **Settings**.
 
 ![Settings](https://help.github.com/assets/images/help/settings/userbar-account-settings.png)&nbsp;&nbsp;&nbsp;&nbsp;
 
 - In the left sidebar, click **Emails**.
 
 ![Emails](https://help.github.com/assets/images/help/settings/settings-sidebar-emails.png)&nbsp;&nbsp;&nbsp;&nbsp;

- Next to your email address, click **Send verification email**.

 ![Verification](https://help.github.com/assets/images/help/settings/email-verify-button.png)&nbsp;&nbsp;&nbsp;&nbsp;
 
 - Github will send you an email with a link in it. After you click that link, you will be taken to your GitHub dashboard and see a confirmation banner.
 
 ![Banner](https://help.github.com/assets/images/help/settings/email-verification-confirmation-banner.png)&nbsp;&nbsp;&nbsp;&nbsp;

2. In the upper-right corner of any page, click your profile photo, then click **Settings**.

![Sttings](https://help.github.com/assets/images/help/settings/developer-settings.png)&nbsp;&nbsp;&nbsp;&nbsp;

3. In the left sidebar, click **Developer Settings**.

![Developer Settings](https://help.github.com/assets/images/help/settings/developer-settings.png)&nbsp;&nbsp;&nbsp;&nbsp;

4. In the left sidebar, click **Personal access tokens**.

![Personal access tokens](https://help.github.com/assets/images/help/settings/personal_access_tokens_tab.png)&nbsp;&nbsp;&nbsp;&nbsp;

5. Click **Generate new token**.

![Generate new token](https://help.github.com/assets/images/help/settings/generate_new_token.png)&nbsp;&nbsp;&nbsp;&nbsp;

6. Give your token a name.

![Token name](https://help.github.com/assets/images/help/settings/token_description.png)&nbsp;&nbsp;&nbsp;&nbsp;

7. Select the permissions that this token will have.

![Permissions](https://help.github.com/assets/images/help/settings/token_scopes.gif)&nbsp;&nbsp;&nbsp;&nbsp;

8. Click **Generate token**.

![Generate token](https://help.github.com/assets/images/help/settings/generate_token.png)&nbsp;&nbsp;&nbsp;&nbsp;

9. Copy the token to your clipboard and save it for later.

![Copy token](https://help.github.com/assets/images/help/settings/personal_access_tokens.png)&nbsp;&nbsp;&nbsp;&nbsp;

### Adding the token to the project

1. Go to /src/config/connection.js

2. Replace the following line with your token inside double quotes.

```process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN``` 

It should look like this

```
export const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      "my_personal_token"
    }`,
  },
});
```
### Run project

* Navigate to the project folder inside the shell.
* Run ```npm start``` 



