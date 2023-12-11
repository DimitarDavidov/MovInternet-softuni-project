----Overview----
------------------
Movinternet is suppose to be a movie site, in which you can add/edit/delete and like movies(depending if you are owner and a user in the site);

1.Guest/Users

-Guests: Guest are the ones who haven't logged in into the site. They have limited access to the site. They can read informtion, but they can't add new movies or make any action with them.

-Users: Users are the people that have logged in into the site. They can add new movies. They can also edit/delete the details of the existing movies (only if they are the creator of the movie). They can also like other people movies.

2. Add movie

2.1. Who can access this page ?

Only logged in users can access this page and its functionallity. You can add a movie by entering the following information:

- Title of the movie - (Shrek)
- Category - (Adventure)
- Year of creation - (2001)
- Type (is it movie or a tv-series) - (Movie)
- Studio that created the movie - (Dream Works)
- Description - (...)
- Image - (Link for the image on Internet)
- Trailer - (Youtube Trailer link);

2.2. What happens after entering the above information ?

After the user entered the above information - he/she can add the movie to the list by pressing the add button

2.3 What happens when the add button is pressed ?

- The Add button sends the information for the movie in the firebase database. It also send some addition information for the movie (likes, Liked users, ownerId, id of the movie (random generated));

3. Edit Movie 

3.1. Who can access the edit movie ?

- Logged in users that are also the owners of the created movie.

3.2. What happens when the edit button is pressed ?

- When you press "Edit Movie" button, the movie in question is automatically  edited in the firebase database.

4. Owners 

- Owner of the movie is the user who added the movie into the site. 

5. Register
- Every guest of the site can register itself by clicking the register button. When they type their email and password they are automatically  registered.
- The password is hashed automatically by the firebase database, so it's impossible to see it.
- The user is required to confirm it's password by entering the same one on the confirm password field. If it's not the same password the registration fails.
- When they press the register button a request is sent to the firebase database and if the information is correct, they get registed and also logged in and they get an unique id which is usefull when doing something with movies.

6. Log In
- Every guest of the site can login, by clicking the login button. When they type their email and password they get automatically logged in.
- When they press the log in button a request is sent to the firebase database and if the information is correct, they get logged in and they get an unique id which is usefull when doing something with movies.

7. Logout

- When pressing the logout button the user gets loggout and becomes a guest in the site. He can always log back in by pressing the login button.

8. Delete Movie

- The owner of the movie can always delete their added movie by pressing the delete button on the details page.

9. Details Page.

- It's different for the users/guests and the owner of the movie.

- If you are owner:
You can see everything related to the movie except the like button. You can also see the exclusive buttons for the owner as delete/edit which are only accessable by you.

- If you are user:
You can see only the information for the movie and the like button. You can't see the edit/delete button.

- If you are guest:
You can only see information related to the movie/tv-series. You can't see any buttons as edit/delete/like.

10. Home Page:

The Home Page is hardcodded.
When you press on an image it send you to the movie you've pressed.

11. Catalog Page: 

THe catalog page send a get request to the firebase database to get the movies in the database than its display it as card with a details button.

12. Like:

Only users who are not the owner of the movie can see/press that button. These people can press this button only once (per account). 

13. FAQ:

- Page for frequently asked questions.

14. Contacts:

- Page for contacts to the owners

15. About: 

- About the site page.