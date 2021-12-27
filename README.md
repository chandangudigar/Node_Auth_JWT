

## Node_Auth_JWT

# Start the Server Using Command:

```
npm start
```
``
this will run the Nodemon on development mode
``

`
Before Running this command Check the mongodb Server is Running or not
`
# MongoDB Server link

mongodb://localhost:27017/JWT


## All APIs

# 1. To User Registration

```
http://localhost:4000/api/user/register
```
``
Body :
  {
    "name": "xyz",
    "email": "xyz",
    "password": "xys"
  }
``

# 2. To User Login 

```
http://localhost:4000/api/user/login
```
``
Body :
  {
    "email":"zys",
    "password": "zys"
  }
``

# 3. To get posts with authToken 

```
http://localhost:4000/api/posts/
```
``
header: 
  {
    auth-token: "fefenjduececmscjsc"
  }
``
 



